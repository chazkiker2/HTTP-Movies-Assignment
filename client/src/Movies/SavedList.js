import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled, { css } from "styled-components";
import theme from "styled-theming";

import SLink from "../components/Layout/SLink";
import Flex from "../components/Layout/Flex";
import Container from "../components/Layout/Container";



const ListContainer = styled(Container)`
	background-color: var(--pBase);
	h3 {
		font-size: 18px;
	}
`;

function SavedList({ list }) {
	return (
		<ListContainer>
			<Container small full style={{ backgroundColor: "var(--pLight)" }}>
				<Flex justifyBetween alignItems="center">
					<h3>Saved Movies:</h3>
					<Flex className="saved-list">
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
						<SLink to="/">Home</SLink>
					</Flex>
				</Flex>
			</Container>
		</ListContainer>
	);
}

export default SavedList;
