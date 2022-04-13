import React from 'react'
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

function Movies(props) {

    return (
        <Container>
            {props.film.title && <>
                <h2>{props.film.title}</h2>
                <p>{props.film.opening_crawl}</p>
                <h6>director: {props.film.director}</h6>
                <FavoriteIcon
                    sx={{ color: props.film.fav, cursor: 'pointer'}}
                    onClick={() => props.addFavoriteMovie(props.index)} />
                {props.film.fav &&
                    <Button variant="outlined" onClick={() => props.removeFavoriteMovie(props.index)} >remove</Button>
                }
            </>}
        </Container>
    )
}

export default Movies

const Container = styled.div`
margin-bottom: 80px;
margin-left:20px ;
`;

