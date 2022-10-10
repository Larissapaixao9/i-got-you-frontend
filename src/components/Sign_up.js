import React from 'react'
import styled from 'styled-components'
import { FaGoogle,FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Input from '../items/Input'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Button from '../items/Button'
import axios from 'axios'
import Swal from 'sweetalert2'

//https://i-got-you-backend.herokuapp.com/
export default function Sign_up() {

  //const base_URL = `http://i-got-you-database.herokuapp.com`

  const base_URL = `http://localhost:4000`

  const URL_login = `${base_URL}/sign-up`

  const [loading, setLoading] = React.useState(false)

  const navigate = useNavigate()

  const [user, setUser]=React.useState({
    email:"",
    name:"",
    password:"",
    confirm_password:""
  })

  async function submit_logup(event){
    console.log(event)

    event.preventDefault()

    setLoading(true)

    try{
      const promise = await axios.post(URL_login,user)
      console.log(promise.data)
      navigate('/')
      
    }
    catch(err){
      setLoading(false)
      console.log(err.response.data)
      Swal.fire({
        icon: 'error',
        title: 'Opa...',
        text: 'Erro no cadastro!',
        footer: '<h4>Tente novamente</h4>'
      })
      
    }
  }

  const IconBackground = "rgba(255,255,255,0.15)";
  return (
    <MainComponent>
      <WelcomeText>Bora cadastrar</WelcomeText>
      <form onSubmit={submit_logup}>
      <InputContainer>
      <Input 
      type="text" 
      placeholder="nome"
      id='name'
      value={user.name}
      onChange={(event)=>setUser({ ...user, name:event.target.value })}
      />

        <Input type="text" 
        placeholder="email"
        id='email'
        value={user.email}
        onChange={(event)=>setUser({ ...user, email:event.target.value })}
        />

        <Input type="password" 
        placeholder="senha"
        id='password'
        value={user.password}
        onChange={(event)=>setUser({ ...user, password:event.target.value })}
        />

        <Input type="password" 
        placeholder="confirmar senha"
        id='confirmPassword'
        value={user.confirm_password}
        onChange={(event)=>setUser({ ...user, confirm_password:event.target.value })}
        />

      </InputContainer>
      <ButtonContainer>
          <Button type='submit' content="Cadastrar"/>
        </ButtonContainer>

      </form>
      <Link to="/" style={{textDecoration: 'none', color:'white', marginBottom:'1%', textAlign:'center'}}>
        <Signup_with_text>Já tem cadastro? Clique aqui</Signup_with_text>
        </Link>
        <Horizontal />
    
        <Sign_up_text ></Sign_up_text>
        
      
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

    form{
      height: 160vh;
    width:60vw;
      display:flex;
    align-items:center;
    flex-direction:column;

    input{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 20%;
      width:100%;
      padding: 1.5rem;
      margin-top:0.4rem;
      margin-bottom: 0.6rem;
    }
    button{
      margin-top: 2rem;
    }
    }

    Link{
      text-decoration: none;
      color:#FFF
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
    text-align: center;
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
    color: #FFF;
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
    text-align: center;
`
