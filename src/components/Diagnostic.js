import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Swal from 'sweetalert2'
import Button from '../items/Button'
import { Link, useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import * as videoFactory from '../factory/videos_factory'
import Logout from '../components/Logout'


export default function Diagnostic() {

  const base_URL = `http://localhost:4000`

  const URL_get_diagnostic = `${base_URL}/diagnostic`

  const [result, setResult] = React.useState(null)

  const [loading, setLoading] = React.useState(false)

  const [url, setUrl] = React.useState(null)

  const [logout, setLogout] = React.useState(false)

  const navigate = useNavigate()

  let video;

  function End_session() {
    localStorage.removeItem("token");
    navigate("/");
}


  React.useEffect(()=>{

    const get_results = async()=>{

      const promise = await axios.get(URL_get_diagnostic, {
        headers:{
          "Authorization": localStorage.getItem("token")
        }
      })

      try {
        console.log(promise.data)
        setResult(promise.data)
        if(promise.data.result=='bom humor'){
          setUrl(await videoFactory.case1_songs())
        }

        if(promise.data.result=='mau humor'){
          setUrl(await videoFactory.case2_songs())
        }
      } catch (error) {
        
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Opa...',
          text: 'Algo deu errado!',
          footer: '<h4>Tente novamente</h4>'
        })
      }
    }
    get_results()
  }, [])


  if(result!=null){
    get_video()
  }
  async function get_video(){
      if(result.result=='bom humor'){
        video=await videoFactory.case1_songs()
      }
      else{
        video = await videoFactory.case2_songs()
      }
  }
  console.log(url)

 
 
  return (
    <MainComponent>
      <DiagnosticText>{result? 'Veja abaixo seu diagnóstico' : 'Voce ainda não possui diagnosticos'}</DiagnosticText>
    <DiagnosticSquare>
      <h3> {result? `Hoje você está com ${result.result}` : "Nada para mostrar"}</h3>
      <h4>{result? 'Musica recomendada para hoje:' : 'Não conseguimos identificar seu humor :('}</h4>
      <h3>{result?.element_with_highest_frequency? `A palavra digitada com maior frequência foi ${result.element_with_highest_frequency}`:"" }</h3>
      <ReactPlayer

  url={url}
  width='100%'
  height='100%'
  config={{
    youtube: {
      playerVars: { showinfo: 1 }
    },
    facebook: {
      appId: '12345'
    }

  }}
/>
    </DiagnosticSquare>
    <ButtonContainer>
      <Link to='/home' style={linkStyle}><Button content="Home"/></Link>
      <ButtonStyle onClick={End_session}>Sair do app</ButtonStyle>
      
    </ButtonContainer>
    </MainComponent>
  )
}


const MainComponent = styled.div`

    display:flex;
    align-items:center;
    flex-direction:column;
    height: 98vh;
    width:90vw;
    background: rgba(255,255,255,0.15);
    box-shadow: 0 8px 38px 0 rgba(31, 38, 100, 0.37);
    backdrop-filter: blur(18.5px);
    border-radius:10px ;
    color:#fff;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
`
const DiagnosticText = styled.h4`
    margin: 2rem 0 2rem 0;
    text-align: center;
`
const DiagnosticSquare = styled.div`

display:flex;
    align-items:center;
    flex-direction:column;
    height: 60vh;
    width:80vw;
    background: pink;
    border-radius:10px ;
    color:#fff;
    padding: 1rem;
    margin-bottom: 0.4rem;

    h3{
      margin-bottom: 1rem;
      color:#000;
      animation: pulse 0.7s infinite;
      animation-direction: alternate;
      -webkit-animation-name: pulse;
      animation-name: pulse;

      @-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -webkit-filter: brightness(100%);
  }
  100% {
    -webkit-transform: scale(1.1);
    -webkit-filter: brightness(200%);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    filter: brightness(100%);
  }
  100% {
    transform: scale(1.1);
    filter: brightness(200%);
  }
}
    }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;



  Link{
    word-break: unset;
    word-wrap: unset;
    white-space: nowrap;
    width: 100%;

  }
`

const linkStyle = {
  wordBreak: "unset",
  wordWrap: "unset",
  whiteSpace: "nowrap",
  width:"100%"

}

const ButtonStyle = styled.button`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 100%;
    height: 3rem;
    border: none;
    color:white;
    border-radius: 2rem;
    cursor:pointer;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left:0.5rem;
    margin-right: 0.5rem;
    
    div{
      justify-content: center;
    }
    
`