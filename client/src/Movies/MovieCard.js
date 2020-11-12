import React from 'react';
import Card from "../components/Layout/Card";
import SLink from "../components/Layout/SLink";
import SButton from "../components/Layout/SButton";
import Flex from "../components/Layout/Flex";
import Heading from "../components/Layout/Heading";

import styled from "styled-components";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const StyledCard = styled(Card)`
	display: inline-block;
	height: 300px;
	background-color: var(--pDark);
	/* margin: 2rem; */
	color: var(--tPrimary);
	h2 {
		font-size: 28px;
	}
	h2, h3 {
		color: var(--pText);
	}
	h3 {
		font-size: 24px;
	}
	p {
		font-size: 18px;
	}
`;

const MovieCard = props => {
	const history = useHistory();
	const { title, director, metascore, stars, id } = props.movie;
	const handleDelete = () => {
		axios.delete(`http://localhost:5000/api/movies/${id}`)
			.then(res => {
				console.log(res);
			}).catch(err => {
				console.log(err);
			});
		history.push("/");
	}
	return (
		// <Container full>
		// 	<Flex justifyAround alignCenter className="flex">
		// 	</Flex>
		// </Container>
		<StyledCard big className="movie-card">
			<Flex column justifyContent="space-evenly">
				<div>
					<Heading h2>{title}</Heading>
					<p className="movie-director">
						Director: <em>{director}</em>
					</p>
					<p className="movie-metascore">
						Metascore: <strong>{metascore}</strong>
					</p>
				</div>
				<div>
					<Heading h3>Actors</Heading>
					{stars.map(star => (
						<p key={star} className="movie-star">
							{star}
						</p>
					))}
				</div>
				<div>
					<SLink to={`/update-movie/${id}`}>Edit</SLink>
					<SButton onClick={handleDelete}>Delete</SButton>
				</div>
			</Flex>
		</StyledCard>

	);
};

export default MovieCard;
