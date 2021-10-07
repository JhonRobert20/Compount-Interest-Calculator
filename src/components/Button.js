import styled from "styled-components";

const BUTON = styled.button`
    display:block;
    border: none;
    box-shadow: 1px 2px 5px grey;
    padding: 20px 0;
    font-family: 'Be Vietnam Pro', sans-serif;
    @media (max-width: 600px) {
        font-size: 17px;
    }
    @media (min-width: 600px) and (max-width: 1000px) {
        font-size: 20px;
    }
    font-size: 23px;
    width: 100%;
    margin: 0 auto;
    background-color: #8E44AD;
    border-radius: 5px;
    cursor: pointer;
    transition: all .5s ease-out;

    &:focus {
        outline: 10px solid #8E44AD;
        border-radius: 0;
    }
    &:hover {
        background-color: #2980B9;
    }

`
const BUTTONCONTAINER = styled.div`
    padding: 20px;
    width: calc(100% - 40px);
`

const Button = ({...props}) => {
    return (
        <BUTTONCONTAINER>
            <BUTON {...props} />
        </BUTTONCONTAINER>
    )
}

export default Button;