
import styled from 'styled-components';

export default function EachSeat ({ seatNumber, name, id, selected, available, isAvailable }) {

    return(
        <Ball 
        available={available}
        selected={selected}
        onClick={selectSeat}
        >
            <p>
                {seatNumber}
            </p>
        </Ball>
    );
}

function selectSeat({ seatNumber }){
    console.log(seatNumber)
    
}


const Ball = styled.div `
    width: 26px;
    height: 26px;
    margin: 5px 5px;
    padding-left: 0.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 11px;

    border: 0.7px solid ${(props) => props.selected ? '#1AAE9E' : (props.available ? '#808F9D' : '#F7C52B')};

    background-color: ${(props) => props.selected ? '#8DD7CF' : (props.available ? '#C3CFD9' : '#FBE192')};

    &:active{
        box-shadow: 0px 0px 1.7px 1.7px #b4b4b480;
        /* transform: translateY(1px); tirar?*/
    }
    &:hover{
        cursor: pointer;
        filter: brightness(1.1);//tirar?
    }
`