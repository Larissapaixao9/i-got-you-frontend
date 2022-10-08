import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { user_context } from '../contexts/user_context'
import Diary_input from '../items/diary_input'
import Button from '../items/Button'
import axios from 'axios'
import Swal from 'sweetalert2'
import giphy from '../images/giphy-unscreen.gif'


export default function Home() {

  const base_URL = `http://localhost:4001`

  const URL_register_thought = `${base_URL}/home`

  const [thought, setThought] = React.useState({
    text:""
  })

  const [loading, setLoading] = React.useState(false)

  const { name } = useContext(user_context)
  console.log(name)

  async function submit_thought(event){
    event.preventDefault()
    setLoading(true)
    
    try {
      const promise = await axios.post(URL_register_thought,thought, {
        headers:{
          "Authorization": localStorage.getItem("token")
        }
      })
      setLoading(false)
      console.log(promise.data)

      Swal.fire({
        title: 'Registrado com sucesso. veja o resultado em diagnósticos.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(src/images/background_1.png)',
        backdrop: `
          rgba(0,0,140,0.4)
          url(${giphy})
          left top
          no-repeat
        `,
        footer: '<a href="/diagnostic">Veja o resultado do seu humor</a>'

      })
      
    } catch (error) {

      setLoading(false)

      console.log(error)

      Swal.fire({
        icon: 'error',
        title: 'Opa...',
        text: 'Algo deu errado!',
        footer: '<h4>Tente novamente</h4>'
      })
    }
  }

  return (
    <MainComponent>
      <WelcomeText>Olá, {name}</WelcomeText>
      <Form onSubmit={submit_thought}>
      <diaryCOntainer>
      <Diary_input id='text' type="text" placeholder="como você está?" value={thought.text} onChange={(event)=>setThought({ ...thought, text:event.target.value })}/>
      </diaryCOntainer>
      <Button content="registrar" loading={loading}/>
      </Form>


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
const diaryCOntainer = styled.div`
  display: flex;
  align-items:center;
    flex-direction:column;
    margin: 0 auto;
    justify-content: center;
`

const WelcomeText = styled.h4`
    margin: 2rem 0 2rem 0;
`

const Form = styled.form`
    display:flex;
    align-items:center;
    flex-direction:column;
    
`