import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const movies = [
    {
        id: 1,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
    },
    {
        id: 2,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
    },
    {
        id: 3,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
    },
    {
        id: 4,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        releaseDate: "2020-10-01T00:00:00.000Z",
    },
];

function EachMovie ({id, title, posterURL, overview, releaseDate, setVisible}) {
    return (
        <Movieborder onClick={() => setVisible(false)}>
            <Picture>
                <img src={posterURL} alt="poster do filme"/>
            </Picture>
        </Movieborder>
    );
}


export default function Start({ setVisible }) {

    return (
        <>
            <Mainscreen>
                <Maintitle>
                    <h2>Selecione o filme</h2>
                </Maintitle>
                <Movieslist>
                    {movies.map((movie, index) => <EachMovie key={index} setVisible={setVisible} posterURL={movie.posterURL} title={movie.title}/>)}
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
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 130px 20px 130px;
    background-color: crimson;
`

const Picture = styled.div `
    width: 129px;
    height: 193px;



    img {
        width: 129px;
        height: 193px;
    }
`


const Movieborder = styled.div `
    width: 145px;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 11px 15px;
    background-color: rgb(255, 204, 204);
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px #0000001A;

    :hover {
        cursor:pointer;
    }
`
