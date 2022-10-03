import React from 'react'
import styled from 'styled-components'
import { FaGoogle,FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Input from '../items/Input'
import Button from '../items/Button'
import Icons from '../items/Icons'
import { Link, Navigate } from 'react-router-dom'
import Sign_up from './Sign_up'


export default function Sign_in() {
  const IconBackground = "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, F0A853 100%)";
  return (
    <MainComponent>
      <WelcomeText>Olá, meu chapa</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="email"/>
        <Input type="password" placeholder="senha"/>
      </InputContainer>
      <ButtonContainer>
          <Button content="Entrar"/>
        </ButtonContainer>

        <Signup_with_text>Ou entre com</Signup_with_text>
        <Horizontal />
        <IconContainer>
          <Icons color={IconBackground}>
            <FaGoogle />
          </Icons>
          <Icons color={IconBackground}>
            <FaInstagram />
          </Icons>
          <Icons color={IconBackground}>
            <FaFacebook />
          </Icons>
        </IconContainer>
        <Link to="sign_up">
        <Sign_up_text >Cadastro</Sign_up_text>
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
      color:white;
    }

    @media only screen and (max-width:320px){
      width: 80vw;
      height: 90vh;

      hr{
        margin-bottom: 0.3rem;
      }
      h4{
        font-size: small;
      }
    }

    @media only screen and (min-width:360px){
      width: 80vw;
      height: 90vh;

      h4{
        font-size: small;
      }
    }

    @media only screen and (min-width:411){
      width: 80vw;
      height: 90vh;
    }

    @media only screen and (min-width:1024){
      width: 70vw;
      height: 50vh;
    }

    @media only screen and (min-width:768){
      width: 80vw;
      height: 80vh;
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
    height: 20%;
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

const Horizontal = styled.hr`
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
