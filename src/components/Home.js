import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { user_context } from '../contexts/user_context'
import Diary_input from '../items/diary_input'
import Button from '../items/Button'
import axios from 'axios'

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
      const promise = await axios.post(URL_register_thought,thought)

      console.log(promise.data)

      
    } catch (error) {

      setLoading(false)
      console.log(error)
      alert('erro no registro')
      
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