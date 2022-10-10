import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FaGoogle,FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Input from '../items/Input'
import Button from '../items/Button'
import Icons from '../items/Icons'
import { Link, useNavigate } from 'react-router-dom'
import { user_context } from '../contexts/user_context'
import Swal from 'sweetalert2'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';


export default function Sign_in() {

  const context = useContext(user_context)

  //const base_URL = `https://i-got-you-backend.herokuapp.com`

  const base_URL = `http://localhost:4000`


  const URL_login = `${base_URL}/sign-in`

  const [loading, setLoading] = React.useState(false)

  const navigate = useNavigate()

  const clientId = '221846276514-k2ort1c1fu3m88gu9d39kldbr7pnk69c.apps.googleusercontent.com'

  const [user, setUser]=React.useState({
    email:"",
    password:""
  })

  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: 'https://www.googleapis.com/auth/userinfo.profile'
        });
     };
     gapi.load('client:auth2', initClient);
 });

  async function submit_login(event){
    console.log(event)

    event.preventDefault()

    setLoading(true)

    try{
      const promise = await axios.post(URL_login,user)
      console.log(promise.data)
      const { name } = await promise.data.name
      console.log(name)
      context.setName(promise.data.name)
      localStorage.setItem("token", "Bearer "+ promise.data.token)
      navigate('/home')
      
    }
    catch(err){
      setLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'Opa...',
        text: 'Algo deu errado!',
        footer: '<h4>Tente novamente</h4>'
      })
      console.log(err.response.data)
      
    }
  }

  const responseGoogle = (response)=>{
    console.log(response)
    const { profileObj: { name, email, googleId } } = response
    let create_user_with_google

    if(email.length>0){
        create_user_with_google=axios.post('http://localhost:4000/sign-up',{
        name:name,
        email:email,
        password: googleId,
        confirm_password:googleId
      })
    }
    if(create_user_with_google){
      setUser({
        email:email,
        password:googleId
      })
    }
  }

  const IconBackground = "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, F0A853 100%)";
  return (
    <MainComponent>
      <WelcomeText>Olá, meu chapa</WelcomeText>
      <form onSubmit={submit_login}>
      <InputContainer>

        <Input id='email' 
        value={user.email} 
        onChange={(event)=>setUser({...user, email:event.target.value})} 
        type="text" 
        placeholder="email"/>

        <Input type="password" 
        placeholder="senha"
        id='password'
        value={user.password}
        onChange={(event)=>setUser({ ...user, password:event.target.value })}
        />
      </InputContainer>
      
      <ButtonContainer>
          <Button loading={loading} content="Entrar"/>
        </ButtonContainer>
      </form>
        <Signup_with_text>Ou entre com</Signup_with_text>
        <Horizontal />
        <IconContainer>
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
      />
          
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
    }
   
    }
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
