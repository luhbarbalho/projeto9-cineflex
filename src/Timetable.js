import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Seats from './Seats'
import Footer from './Footer'


const times = [
    {
        weekday: "Quarta-feira",
        date: "25/06/2021",
        name: "14:00",
        id: 1
    },
    {
        weekday: "Quinta-feira",
        date: "24/06/2021",
        name: "15:00",
        id: 2
    },
    {
        weekday: "Sexta-feira",
        date: "26/06/2021",
        name: "15:00",
        id: 3
    },
    {
        weekday: "Sábado",
        date: "27/06/2021",
        name: "15:00",
        id: 4
    },
    {
        weekday: "Domingo",
        date: "28/06/2021",
        name: "15:00",
        id: 5
    },
    {
        weekday: "Segunda-feira",
        date: "29/06/2021",
        name: "15:00",
        id: 6
    },
]



function EachTime ({weekday, date, name, setNextpage}) {
    return (
        <Timeoption>
            <p>{weekday} - {date}</p>
            <button onClick={() => setNextpage(true)}>{name}</button>
        </Timeoption>
    );
}

export default function Timetable () {

    const [nextpage, setNextpage] = useState(false);

    return (
        <>
            {!nextpage ? (
                <div>
                    <Mainscreen>
                        <Maintitle>
                            <h2>Selecione o horário</h2>
                        </Maintitle>
                        <Timetablelist>
                            {times.map((time, index) => <EachTime key={index} setNextpage={setNextpage} weekday={time.weekday} date={time.date} name={time.name}/>)}
                        </Timetablelist>
                    </Mainscreen>
                    <Footer />
                </div>
                    ) : (
                    <Seats />
                    )}
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
    margin-bottom: 20px;
    padding-left: 25px;
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