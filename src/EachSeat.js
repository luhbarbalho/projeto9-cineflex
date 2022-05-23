
import styled from 'styled-components';


export default function EachSeat ({ seatNumber, id, selected, available, SelectSeat, selection, setSelection}) {


    function Selection () {
        selected={selected}
        id={id}
        seatNumber={seatNumber}
        console.log(id, seatNumber)
    }

    function SelectSeat (){

        available
        ?
        Selection()
        : 
        alert("Este assento não está mais disponível");
    }
    

    return(
        <Ball 
        available={available}
        selected={selected}
        onClick={SelectSeat}
        >
            <p>
                {seatNumber}
            </p>
        </Ball>
    );
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
    }
    &:hover{
        cursor: pointer;
        background-color: #f3eb76;
    }
`