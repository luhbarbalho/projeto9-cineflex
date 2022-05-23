import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import loading from './assets/loading.gif';


export default function Timetable (props) {

    const { idFilme }  = useParams();
    

    function EachTime ({ weekday, id, date, name, showtimes}) {
        return (
            <Timeoption>
                <p>{weekday} - {date}</p> 
                
                {showtimes.length === 0 ? 
                    <img width="100px" height="100px" src={loading} alt="loading"/> 

                    : 

                    showtimes.map(showtime => <EachButton key={showtime.id} name={showtime.name} id={showtime.id}
                    />)} 
            </Timeoption>
        );
    }

    function EachButton ({ name, id, showtimes } ){
        return (
            <Link to={`/assentos/${id}`}>
                <button>{name}</button>
            </Link>
        );
    }

    function EachFoot (posterURL) {
        <Movieborder>
            <Picture>
                {posterURL}
            </Picture>
        </Movieborder>
    }

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        request.then(response => {
            props.setSchedules([...response.data.days])
            console.log('entrou', props.schedules)
        });
        request.catch((err) => {
            alert("ops!");
            console.log(err.response)
        })

    }, []);
    

    return (
        <>
            <Mainscreen>
                <Maintitle>
                    <h2>Selecione o horário</h2>
                </Maintitle>
                <Timetablelist>
                    {props.schedules.length === 0 ? 
                        <img width="100px" height="100px" src={loading} alt="loading"/> 
                        
                        : 

                        props.schedules.map(schedule => <EachTime key={schedule.id} weekday={schedule.weekday} date={schedule.date} showtimes={schedule.showtimes}
                    />)
                    }
                </Timetablelist>
            </Mainscreen>
            {/* <Footer>
                <Cart>
                    <Movieborder>
                        <Picture>
                            {movie.posterURL}
                        </Picture>
                    </Movieborder>
                    <MovieInfo><p>{movie.title}</p>
                    <p>{schedule.weekday} - {schedule.name}</p></MovieInfo>
                </Cart>
            </Footer> FAZER O FOOTER */}
        </>
    );
}

const Mainscreen = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 67px;
    margin-bottom: 100px;
    overflow-x: hidden;
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

const Timetablelist = styled.div `
    min-width: 375px;
    height: auto;
    display: flex;
    flex-direction: column;
    /* align-items: center; ver isso tb*/
    margin-bottom: 20px;
    padding-left: 25px; //ver isso

    img {
        margin-left: 110px
    }
`

const Timeoption = styled.div `
    margin-bottom: 25px;
    p {
        font-size: 20px;
        line-height: 35px;
        margin-bottom: 22px;
    }
    button {
        width: 82px;
        height: 43px;
        font-size: 18px;
        font-weight: 300;
        color: white;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        margin-right: 8px;
    }

    button:hover {
        cursor:pointer;
        opacity: 0.7;
    }
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