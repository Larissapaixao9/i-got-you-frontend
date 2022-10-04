import styled from "styled-components";

import React from 'react'

export default function Input({ type, placeholder, id, value, onChange }) {
  return (
    <InputStyle type={type} 
    placeholder={placeholder} 
    id={id}
    value={value}
    onChange={onChange}
    />
  )
}

const InputStyle = styled.input`
    background: rgba(255,255,255,0.15);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    border-radius: 2rem;
    height: 3rem;
    width: 80%;
    padding: 1rem;
    border: none;
    outline: none;
    font-weight: bold;
    color: #002000;
    font-size: 1rem;
    &:focus{
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #0b9ab0;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
    }
    &::placeholder{
        color:#002000;
        font-size: 1rem;
        font-weight: 100;
    }
`



