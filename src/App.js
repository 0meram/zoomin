import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [film, setFilm] = useState("")
	const [index, setIndex] = useState("")
	const [movieList, setmovieList] = useState(JSON.parse(localStorage.getItem('react-movie-list')) || null)

	useEffect(async () => {
		await axios.get('https://swapi.dev/api/films').then(res => {
			if (movieList) {
				setMovies(movieList)
			} else {
				setMovies(res.data.results)
				setmovieList(res.data.results)
				localStorage.setItem('react-movie-list', JSON.stringify(res.data.results));
			}
		}).catch(err => {
			console.log(err);
		});;
	}, [])

	const saveToLocalStorage = (moviesObj) => {
		localStorage.setItem('react-movie-list', JSON.stringify(moviesObj));
	};

	const addFavoriteMovie = (index) => {
		const newList = [...movieList]
		newList[index].fav = "red";
		saveToLocalStorage(movieList);
		setMovies(newList)
	};

	const removeFavoriteMovie = (index) => {
		const newList = [...movieList]
		newList[index].fav = null;
		saveToLocalStorage(movieList);
		setMovies(newList)
	};

	return (
		<>
			<Header />
			<Container>
				<MovieList
					setIndex={setIndex}
					setFilm={setFilm}
					movies={movies}
				/>
				<MovieDetails
					film={film}
					index={index}
					addFavoriteMovie={addFavoriteMovie}
					removeFavoriteMovie={removeFavoriteMovie}
				/>
			</Container>
		</>
	);
};

export default App;

const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x: hidden;
display: flex ;

&:before{
    background: url("/images/home-background.png") center center / cover 
    no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
`;