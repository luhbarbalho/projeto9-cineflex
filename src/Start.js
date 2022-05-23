import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import loading from './assets/loading.gif';

function EachMovie ({ posterURL, title, id }) {

    return (
        <Link to={`/sessoes/${id}`}>
            <Movieborder>
                <Picture>
                    <img src={posterURL} alt={title}/>
                </Picture>
            </Movieborder>
        </Link>

    );
}

export default function Start() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies`);

        request.then(response => {
            setMovies([...response.data])
        })
        
        request.catch((err) => {
            alert("ops!");
            console.log(err.response)
        })

    }, []);

    return (
        <>
            <Mainscreen>
                <Maintitle>
                    <h2>Selecione o filme</h2>
                </Maintitle>
                <Movieslist>
                    {movies.length === 0 ? <img width="100px" height="100px" src={loading} alt="loading"/> :
                        movies.map(movie => <EachMovie key={movie.id}  posterURL={movie.posterURL} title={movie.title} id={movie.id}
                    />)}
                </Movieslist>
            </Mainscreen>
        </>
    );
}

const Mainscreen = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 67px;
`

const Maintitle = styled.div `
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h2 {
        font-size: 24px;
        font-family: 'Roboto';
        letter-spacing: 0.04em;
        font-weight: 400;
    }
`

const Movieslist = styled.div `
    display: flex;
    max-width: 900px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 130px 20px 130px;
`

const Movieborder = styled.div `
    width: 145px;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 11px 15px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px #0000001A;

    &:hover {
        cursor:pointer;
        opacity: 0.8;
    }
`

const Picture = styled.div `
    width: 129px;
    height: 193px;

    img {
        width: 129px;
        height: 193px;
    }
`
