import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Swal from 'sweetalert2'
import Button from '../items/Button'
import { Link, useNavigate } from 'react-router-dom'
import Logout from './Logout'

export default function Diagnostic() {

  const base_URL = `http://localhost:4001`

  const URL_get_diagnostic = `${base_URL}/diagnostic`

  const [result, setResult] = React.useState()

  const [loading, setLoading] = React.useState(false)



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

  return (
    <MainComponent>
      <DiagnosticText>{result? 'Veja abaixo seu diagnóstico' : 'Voce ainda não possui diagnosticos'}</DiagnosticText>
    <DiagnosticSquare>
      <h3> {result? `Hoje você está com ${result.result}` : "Nada para mostrar"}</h3>
      <h3>{result?.element_with_highest_frequency? `A palavra digitada com maior frequência foi ${result.element_with_highest_frequency}`:"" }</h3>

    </DiagnosticSquare>
    <ButtonContainer>
      <Link to='/home' style={linkStyle}><Button content="Ir para home"/></Link>
      <Button content="sair do app" />
      
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
`
const DiagnosticSquare = styled.div`

display:flex;
    align-items:center;
    flex-direction:column;
    height: 49vh;
    width:80vw;
    background: pink;
    border-radius:10px ;
    color:#fff;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:36vw;


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