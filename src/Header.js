import styled from 'styled-components'

export default function Header () {

    return (
        <>
            <Headers>
                <h1>cineflex</h1>
            </Headers>
        </>
    );
}


const Headers = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    height: 67px;
    background-color: #C3CFD9;
    position: fixed;
    top: 0;
    width: 100vw;
    box-shadow: 0px 2px 3px 0px #0000001A;

    h1 {
        color: #E8833A;
        font-family: 'Roboto';
        font-size: 34px;
    }
`
