import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Footer from './Footer';
import EachSeat from './EachSeat';
import loading from './assets/loading.gif';

export default function Seats ({ completed, movie, schedule, showtime, title, weekday, name }) {
    
    // ESCOLHA DO ASSENTO

    const [chairs, setChairs] = useState([]);
    // const [isSelected, setIsSelected] = useState([]); //para escolha dos assentos
    const [nameForm, setNameForm] = useState('');
    const [cpfForm, setCpfForm] = useState('');
    const navigate = useNavigate();
    const { idSessao }  = useParams();

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        request.then(response => {
            setChairs(response.data);
            console.log("alo", chairs)
        })

        request.catch((err) => {
            alert("ops!");
            console.log(err.response)
        })

    }, []);


    // DADOS DO CLIENTE NO FORM

    function SubmitForm (event) {
        event.preventDefault();
        console.log(nameForm)

        const promise = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`,{
            ids: [5],
            name: nameForm,
            cpf: cpfForm
        });

        promise.then(response => {
            completed({
                filme: movie.title,
                sessaoDia: schedule.weekday,
                sessaoHora: showtime.name,
                assentos: [5, 6],
                compradorNome: nameForm,
                compradorCPF: cpfForm


                // filme: movie.title,
                // sessaoDia: schedule.weekday,
                // sessaoHora: showtime.name,
                // assentos: [5, 6],
                // compradorNome: nameForm,
                // compradorCPF: cpfForm
            });

            navigate(`/sucesso`);
        });
    }



    return (
        <>
            <Mainscreen>
                <Maintitle>
                    <h2>Selecione o(s) assento(s)</h2>
                </Maintitle>

                <Seatlist>

                    {chairs.length === 0 ? 
                    <img width="100px" height="100px" src={loading} alt="loading"/> 

                    : 

                    chairs.seats.map(chair => { 
                        const {id, name, isAvailable } = chair; 
                        return(
                            <EachSeat
                            key={id}
                            seatNumber={name}
                            available={isAvailable}
                            selected={false}
                            />
                        )})
                    }

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

                <Form onSubmit={SubmitForm} >

                    <Label htmlFor="nome">Nome do comprador:</Label>
                    <Input type="text"  id="nome" placeholder="Digite seu nome aqui." onChange={(e) => setNameForm(e.target.value)} value={nameForm} required />

                    <Label htmlFor="CPF">CPF do comprador:</Label>
                    <Input type="text" id="CPF" placeholder="Digite seu nome aqui." onChange={(e) => setCpfForm(e.target.value)} value={cpfForm} required />
                    <Btn>
                        
                            <Button type="submit" name="enviar">Reservar assento(s)</Button>
                        
                    </Btn>

                </Form>
            </Mainscreen>
            <Footer />                
        </>
    );
}

//
//
//
//
//
//
//

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
const Ball = styled.div `
    width: 24px;
    height: 24px;
    margin-bottom: 6px;
    border-radius: 50%;
`
const BallGreen = styled(Ball)`
    border: 0.5px solid #1AAE9E;
    background-color: #8DD7CF;
`
const BallGray = styled(Ball)`
    border: 0.5px solid #808F9D;
    background-color: #C3CFD9;
`
const BallYellow = styled(Ball)`
    border: 0.5px solid #F7C52B;
    background-color: #FBE192;
`

// info consumidor - FORM

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 375px;
    height: 256px;
    font-size: 18px;
    padding: 0 10px 0 10px;
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
`

const Button = styled.button`
    height: 42px;
    width: 225px;
    background-color: #E8833A;
    border: none;
    color: white;
`