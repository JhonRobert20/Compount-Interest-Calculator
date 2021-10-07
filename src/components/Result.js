import styled from "styled-components";

const DIV = styled.div`
    background-color: #4FC3F7;
    padding: 20px;
    display: flex;
    flex-direction: row;
    width: calc(100% - 40px);
    margin: auto;
    align-items: center;
    border-radius: 0 0 10px 10px;
    justify-content: space-around;
`

const Result = ({totalValue}) => {
    return (
        <DIV>
            <label>Future Money</label>
            <p>{totalValue}€</p>
        </DIV>
    )
}

export default Result;