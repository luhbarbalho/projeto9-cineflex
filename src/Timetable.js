import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import Footer from './Footer'
import loading from './assets/loading.gif';


export default function Timetable () {
    

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

    const [schedules, setSchedules] = useState([]);
    const { idFilme }  = useParams();

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        request.then(response => {
            setSchedules([...response.data.days])
            console.log('entrou', schedules)
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
                    {schedules.length === 0 ? 
                        <img width="100px" height="100px" src={loading} alt="loading"/> 
                        
                        : 

                        schedules.map(schedule => <EachTime key={schedule.id} weekday={schedule.weekday} date={schedule.date} showtimes={schedule.showtimes}
                    />)}
                </Timetablelist>
            </Mainscreen>
            <Footer />
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