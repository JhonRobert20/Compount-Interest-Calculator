import { useField } from "formik";
import styled from "styled-components";

const CONTAINER = styled.div`
    @media (max-width: 1000px) {
        padding: 20px 10px;
        width: calc(100% - 20px);
    }
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(100% - 40px);
    text-align: center;
    &:first-child {
        border-radius: 5px 5px 0 0;
    }
    & label {
        text-align: left;
        width: 50%;
    }
    & input {
        width: 50%;
        padding: 5px 20px;
        text-align: left;
        font-family: 'Be Vietnam Pro', sans-serif;
    }
    & input:focus{
        font-family: 'Be Vietnam Pro', sans-serif;
        outline: 2px solid #8E44AD;
    }
    & input[type=number]::-webkit-inner-spin-button, 
    & input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
    & input[type=number] { 
        -moz-appearance:textfield; 
    }
`

const Input = ({label, ...props}) => {
    const [field] = useField(props.name)

    return (
        <CONTAINER>
            <label>{label}</label>
            <input {...field} {...props} ></input>
        </CONTAINER>
    )
}


export default Input;