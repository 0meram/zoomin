
import React from 'react'
import styled from 'styled-components';

function MovieList(props) {

	const ShowDetails = (film, index) => {
		props.setFilm(film)
		props.setIndex(index)
	}

	return (
		<Container>
			{props.movies &&
				props.movies.map((film, index) => {
					return (
						<Wrap onClick={() => ShowDetails(film, index)} key={film.episode_id}>
							{film.title}
						</Wrap>
					)
				})
			}
		</Container>
	)
}

export default MovieList

const Container = styled.div`
margin-top: 30px;
padding: 10px 0 0px;
min-Width: 190px;
`;

const Wrap = styled.div`
cursor: pointer;
margin: 5px;
border: 3px solid rgba(249, 249, 249, 0.1);
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

&:hover{
    border-color: rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
}

`