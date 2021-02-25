import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Layout/Form";
import { useParams, useHistory } from "react-router-dom";
import { useRequest } from "../utils/hooks/useRequest";
import MovieCard from "./MovieCard";

const MovieForm = (props) => {
	const { movies } = props;
	const history = useHistory();
	const params = useParams();
	console.log(params);
	const id = params.id;
	const [values, setValues] = useState({});
	// const getData = async () => {
	// 	const x = useRequest
	// }
	const { data, loading, err } = useRequest(`http://localhost:5000/api/movies/${id}`);
	useEffect(() => {
		if (data) {
			let dataToSet;
			if (Array.isArray(data.stars)) {
				console.log("iterable!: ", data.stars);
				let copy = [...data.stars];
				console.log(data.stars);
				console.log(copy);
				dataToSet = { ...data, stars: data.stars.join(", ") };
				console.log(dataToSet);
				setValues(copy);
			}
			console.log("not iterable: ", data.stars);
			console.log(data)
			console.log(dataToSet);
			setValues(data);
		}
	}, [data])

	const handleChanges = (evt) => {
		evt.preventDefault();
		const { name, value } = evt.target;
		setValues({ ...values, [name]: value });
	}
	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (Array.isArray(values.stars)) {
			axios.put(`http://localhost:5000/api/movies/${id}`, values)
			.then(res => {
				console.log(res)
				history.push("/");
			})
			.catch(error => console.log(error));
			return;
		} else {
			const dataToPut = { ...values, stars: values.stars.split(",") };
			console.log(dataToPut);
			axios.put(`http://localhost:5000/api/movies/${id}`, dataToPut)
				.then(res => {
					console.log(res)
					history.push("/");
				})
				.catch(error => console.log(error));
		}
	}

	return (
		<Form onSubmit={handleSubmit}>
			<label htmlFor="title">
				Title:
				<input type="text" name="title" id="title" value={values.title} onChange={handleChanges} />
			</label>
			<label htmlFor="director">
				Director:
				<input type="text" name="director" id="director" value={values.director} onChange={handleChanges} />
			</label>
			<label htmlFor="actors">
				Actors:
				<input type="text" name="stars" id="actors" value={values.stars} onChange={handleChanges} />
			</label>
			<label htmlFor="metascore">
				Metascore
				<input type="number" name="metascore" id="metascore" value={values.metascore} onChange={handleChanges} />
			</label>
			<button>Submit</button>
		</Form>
	)
}

export default MovieForm;