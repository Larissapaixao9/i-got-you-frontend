import React from 'react'
import styled from 'styled-components'
import { FaGoogle,FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Input from '../items/Input'
import Button from '../items/Button'
import Icons from '../items/Icons'
import { Link, Navigate } from 'react-router-dom'

export default function Sign_up() {
  const IconBackground = "rgba(255,255,255,0.15)";
  return (
    <MainComponent>
      <WelcomeText>Bora cadastrar</WelcomeText>
      <InputContainer>
      <Input type="text" placeholder="nome"/>
        <Input type="text" placeholder="email"/>
        <Input type="password" placeholder="senha"/>
        <Input type="password" placeholder="confirmar senha"/>
      </InputContainer>
      <ButtonContainer>
          <Button content="Cadastrar"/>
        </ButtonContainer>

        <Signup_with_text>Ou entre com</Signup_with_text>
        <Horizontal />
    
        <Link to="/">
        <Sign_up_text >LOgin</Sign_up_text>
        </Link>
      
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

    Link{
      text-decoration: none;
    }
`

const WelcomeText = styled.h2`
    margin: 2rem 0 2rem 0;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 40%;
    width:100%;
`

const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Signup_with_text = styled.h5`
    cursor:pointer;
`

const Horizontal = styled.div`
    width:90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    margin: 1.5rem 0 1rem 0;
    background: linear-gradient(to right, #14163c 0%, #03217b 75%);
    backdrop-filter: blur(25px);
`

const IconContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0 3rem 0;
    width:80%auto;

`

const Sign_up_text = styled.h4`
    cursor: pointer;
`
