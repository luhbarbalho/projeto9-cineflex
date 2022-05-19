import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Success from './Success';
import Footer from './Footer';

const balls = [
    {
        seat: 1,
    },
    {
        seat: 2,
    },
    {
        seat: 3,
    },
    {
        seat: 4,
    },
    {
        seat: 5,
    },
    {
        seat: 6,
    },
    {
        seat: 7,
    }
]

function Eachseat ({ seat, setNextpage }) {

    return (
        <Ball onClick={() => setNextpage(true)}>
            <p>{seat}</p>
        </Ball>
    );
}


export default function Seats () {

    const [nextpage, setNextpage] = useState(false);

    return (
        <>
            {!nextpage ? (
                <div>
                    <Mainscreen>
                        <Maintitle>
                            <h2>Selecione o(s) assento(s)</h2>
                        </Maintitle>

                        <Seatlist>
                            {balls.map((ball, index) => <Eachseat key={index} seat={ball.seat} setNextpage={setNextpage}/>)}
                        </Seatlist>

                        <Seattypes>
                            <Type>
                                <BallGreen></BallGreen>
                                <p>Selecionado</p>
                            </Type>
                            <Type>
                                <BallGray></BallGray>
                                <p>Disponível</p>
                            </Type>
                            <Type>
                                <BallYellow></BallYellow>
                                <p>Indisponível</p>
                            </Type>
                        </Seattypes>

                        <Form method="post" action="guardar-info-ex">
                            <Fieldset>
                                <Label for="nome">Nome do comprador:</Label>
                                <Input type="text" name="nome" id="nome" placeholder="  Digite seu nome aqui." tabIndex="2"/>
                                <Label for="nome">CPF do comprador:</Label>
                                <Input type="text" name="nome" id="nome" placeholder="  Digite seu nome aqui." tabIndex="2"/>
                                <Btn>
                                    <Input type="submit" name="enviar" value="Reservar assento(s)"/>
                                </Btn>
                            </Fieldset>
                        </Form>
                    </Mainscreen>
                    <Footer />
                </div>
                ) : (
                <Success />
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

const Seatlist = styled.div `
    width: 375px;
    margin: 0;
    height: 210px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    p {
        font-size: 11px;
        line-height: 13px;
    }
`

const Ball = styled.div `
    width: 26px;
    height: 26px;
    margin: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #808F9D;
    border-radius: 50%;
    background-color: ${props => props.selecionado ? 'yellow' : '#1AAE9E'};
    font-size: 11px;
    line-height: 13px;

    :hover{
        cursor: pointer;
        opacity: 0.7;
    }
`

// tipos de assentos

const Seattypes = styled.div `
    width: 375px;
    height: 52px;
    margin: 8px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Type = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BallGreen = styled(Ball)`
    width: 24px;
    height: 24px;
    border: 0.5px solid #1AAE9E;
    background-color: #8DD7CF;
    margin-bottom: 6px;
`

const BallGray = styled(Ball)`
    width: 24px;
    height: 24px;
    border: 0.5px solid #808F9D;
    background-color: #C3CFD9;
    margin-bottom: 6px;
`

const BallYellow = styled(Ball)`
    width: 24px;
    height: 24px;
    border: 0.5px solid #F7C52B;
    background-color: #FBE192;
    margin-bottom: 6px;
`

// info consumidor - FORM

const Form = styled.form`
    width: 375px;
    height: 256px;
    font-size: 18px;
    padding: 0 10px 0 10px;
`

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Label = styled.label`
    margin: 10px 0 5px 0;
`

const Input = styled.input`
    height: 51px;
    width: 338px;
    border: 0.5px solid #D4D4D4;
    border-radius: 3px;
    color: #293845;
    font-size: 18px;
    padding-left: 10px;

    :focus {
        outline: none;
    }

    ::placeholder {
        color: #84929e;
        font-size: 18px;
    }
`


const Btn = styled.div`
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
    height: 42px;
    width: 225px;
    background-color: #E8833A;
    border: none;
    color: white;
}
`