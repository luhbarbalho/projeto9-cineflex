import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Success ({ confirmation }) {

    const  {filme, sessaoDia, sessaoHora, assentos, compradorNome, compradorCPF}  = confirmation;
    
    console.log(assentos);

    return (
        <>
            <Mainscreen>
                <Maintitle>
                    <h2>Pedido feito com sucesso!</h2>
                </Maintitle>
                <Pedidolist>
                    <Infotitle>
                        <h3>Filme e sessão</h3>
                        <p>{filme}</p>
                        <p>{sessaoDia} {sessaoHora}</p>
                    </Infotitle>
                    <Infotitle>
                        <h3>Ingressos</h3>
                        {assentos.map((numAssento, index) => <p key={index}>Assento {numAssento}</p> )}
                    </Infotitle>
                    <Infotitle>
                        <h3>Comprador</h3>
                        <p>Nome: {compradorNome}</p>
                        <p>CPF: {compradorCPF}</p>
                    </Infotitle>
                    <Link to={`/`}>
                        <Button>Voltar para home</Button>
                    </Link>
                </Pedidolist>
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
        width: 180px;
        text-align:center;
        color: #247A6B;
        font-weight: 700;
    }
`

const Pedidolist = styled.div `
    width: 375px;
    min-height: 78vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const Infotitle = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 375px;
    min-height: 110px;

    h3 {
        color: #293845;
        font-weight: 700;
        line-height: 40px;
        font-size: 24px;
        margin-top: 7px;
    }

    p {
        color: #293845;
        font-weight: 300;
        font-size: 22px;
        line-height: 30px;
    }
`
const Button = styled.button `
    height: 42px;
    width: 225px;
    background-color: #E8833A;
    border: none;
    color: white;
    border-radius: 3px;
`