import styled from "styled-components";

import React from 'react'

export default function Icons({ color, children }) {
  return (
    <IconStyle background={color}>{children}</IconStyle>
  )
}

const IconStyle = styled.div`
    height: 3.5rem;
    width:3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4rem;
    color:#fff;
    cursor: pointer;
    svg{
        width: 1.5rem;
        height: 1.5rem;
    }
`