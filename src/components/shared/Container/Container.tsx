import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  
  height: 100%;
  max-width: ${({theme}) => theme.breakPoint.xxl};
`