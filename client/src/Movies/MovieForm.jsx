import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Layout/Form";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieForm = props => {
	const { movies } = props;

	const params = useParams();
	// const movieId = params.id;
	// console.log(movieId);
	const [movieId, setMovieId] = useState(0)
	const [currentMovie, setCurrentMovie] = useState({});

	const [values, setValues] = useState({});

	useEffect(() => {
		setMovieId(params.id);
		axios.get(`http://localhost:5000/api/movies/${movieId}`)
			.then(res => {
				setCurrentMovie(res.data)
				setValues(res.data);
			})
			.catch(err => { console.log(err) });
	}, [])

	// useEffect(() => {
	// 	setValues({
	// 		...values,
	// 		title: currentMovie.title,
	// 		actors: currentMovie.stars.join(" ")
	// 	})
	// }, [currentMovie])

	const handleChanges = (evt) => {
		evt.preventDefault();
		const { name, value } = evt.target;
		// if (name !== "actors") {
		setValues({ ...values, [name]: value });
		// } else {
		// 	setValues({ ...values, "actors": value.split(" ") });
		// }
	}
	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(values);
		axios.put(`http://localhost:5000/api/movies/${movieId}`, {
			id: currentMovie.id,
			title: values.title,
			director: values.director,
			metascore: Number(values.metascore),
			stars: (values.stars || values.stars !== "") ? values.stars.split(",") : [],
		}).then(res => {
			console.log(res);
		}).catch(err => console.log(err));
	}

	// const fetchMovie = 
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
				<input type="text" name="stars" id="actors" value={values.actors} onChange={handleChanges} />
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