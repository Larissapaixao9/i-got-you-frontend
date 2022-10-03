import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Input from '../items/Input'

export default function Sign_in() {
  return (
    <MainComponent>
      <WelcomeText>Olá, meu chapa</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="email"/>
        <Input type="password" placeholder="senha"/>
      </InputContainer>
    </MainComponent>
  )
}


const MainComponent = styled.div`

    display:flex;
    align-items:center;
    flex-direction:column;
    height: 80vh;
    width:30vw;
    background: rgba(255,255,255,0.15);
    box-shadow: 0 8px 38px 0 rgba(31, 38, 100, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius:10px ;
    color:#fff;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
`

const WelcomeText = styled.h2`
    margin: 2rem 0 2rem 0;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width:100%;
`
