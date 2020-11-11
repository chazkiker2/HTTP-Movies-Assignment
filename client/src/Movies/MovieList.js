import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import Container from "../components/Layout/Container";
import Flex from "../components/Layout/Flex";

function MovieList({ movies }) {
	return (
		<Container full className="movie-list">
			<Flex justifyContent="space-evenly" alignItems="flex-start">
				{
					movies.map(movie => (
						<Link key={movie.id} to={`/movies/${movie.id}`}>
							<MovieCard movie={movie} />
						</Link>
					))
				}
			</Flex>
		</Container>
	);
}

export default MovieList;
