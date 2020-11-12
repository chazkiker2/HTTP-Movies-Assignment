import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
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
					</Flex>
				</Flex>
			</Container>
		</ListContainer>
	);
}

export default SavedList;
