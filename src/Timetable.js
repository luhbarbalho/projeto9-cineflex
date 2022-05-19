import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'


// function EachTime ({weekday, date, showtimes, name}) {
//     return (
//         <div className="timeoption">
//             <p>{weekday} - {date}</p>
//             <button>{showtimes}</button>
//             <button>{name}</button>
//         </div>
//     );
// }

export default function Timetable({ setVisible }) {

    return (
        <>
            <Mainscreen>
                <Maintitle>
                    <h2>Selecione o horário</h2>
                </Maintitle>
                <Timetablelist>

                    <Timeoption>
                        <p>Terça-feira - 26/06/2022</p>
                        <button>hh:mm</button>
                        <button>hh:mm</button>
                    </Timeoption>
                    <Timeoption>
                        <p>Quarta-feira - 27/06/2022</p>
                        <button>55:55</button>
                        <button>hh:mm</button>
                    </Timeoption>
                </Timetablelist>
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
`