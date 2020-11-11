import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled, { css } from "styled-components";
import theme from "styled-theming";

const List = styled.div`
	display: flex;
	background-color: var(--pDark);
	color: var(--pText);
`;

function SavedList({ list }) {
	return (
		<List className="saved-list">
			<h3>Saved Movies:</h3>
			{list.map(movie => {
				return (
					<NavLink
						to={`/movies/${movie.id}`}
						key={movie.id}
						activeClassName="saved-active"
					>
						<span className="saved-movie">{movie.title}</span>
					</NavLink>
				);
			})}
			<div className="home-button">
				<Link to="/">Home</Link>
			</div>
		</List>
	);
}

export default SavedList;
