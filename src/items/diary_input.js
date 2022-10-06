import React from "react";
import styled from "styled-components";

export default function Diary_input({ type, placeholder, id, onChange, value }) {
    return (
      <Input_style type={type} 
      placeholder={placeholder} 
      id={id}
      onChange={onChange}
      value={value}
      />
    )
  }

  const Input_style = styled.input`
       background: rgba(255,255,255,0.15);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    border-radius: 2rem;
    height: 18rem;
    width: 100%;
    padding: 2rem;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    font-weight: bold;
    color: #002000;
    font-size: 1rem;
    &:focus{
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #0b9ab0;
        backdrop-filter: blur(12rem);
        border-radius: 0rem;
    }
    &::placeholder{
        color:#002000;
        font-size: 1rem;
        font-weight: 100;
    }
  `