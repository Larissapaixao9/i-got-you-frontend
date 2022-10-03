import styled from "styled-components";

import React from 'react'

export default function Button({ content, color }) {
  return (
    <ButtonStyle Background={color}>
        {content}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    border: none;
    color:white;
    border-radius: 2rem;
    cursor:pointer;
`
