import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { user_context } from '../contexts/user_context'

export default function Home() {
  const { name } = useContext(user_context)
  console.log(name)
  return (
    <MainComponent>
      <h4>{name}</h4>
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
