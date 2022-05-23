import styled from 'styled-components'
import Start from './Start';
import { useState, useEffect } from 'react';


export default function Footer ({ posterURL, title, id, movie, schedule }) {


    return (
        <>
            <Footers>
                <Cart>
                    <Movieborder>
                        <Picture>
                            {movie.posterURL}
                        </Picture>
                    </Movieborder>
                    <MovieInfo><p>{movie.title}</p>
                    <p>{schedule.weekday} - {schedule.name}</p></MovieInfo>
                </Cart>
            </Footers>
        </>
    );
}

const Footers = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 117px;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;;
    position: fixed;
    bottom: 0;
    width: 100vw;
`

const Cart  = styled.div `
width: 375px;
height: 117px;
display: flex;
justify-content: flex-start;
align-items: center;
`

const Movieborder = styled.div `
    width: 64px;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 14px 0 10px;
    background-color: rgb(255, 240, 240);
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px #0000001A;
`

const Picture = styled.div `
    width: 48px;
    height: 72px;
    background-color: rgb(9, 117, 81);

    img {
        width: 129px;
        height: 193px;
    }
`

const MovieInfo = styled.div `
    height: 70px;
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
        color: #293845;
        font-family: 'Roboto';
        font-size: 26px;
    }
`