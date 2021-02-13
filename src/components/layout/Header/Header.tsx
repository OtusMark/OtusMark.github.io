import React from 'react'
import styled from 'styled-components'
import {Nav} from "../Nav/Nav";
import {Container} from "../../shared/Container/Container";

export const Header = () => {
    return (
        <HeaderL>
            <Container>
                <HeaderInnerL>
                    <Nav/>
                </HeaderInnerL>
            </Container>
        </HeaderL>
    )
}

// Styles
const HeaderL = styled.header`
  
  height: 80px;
  background-color: ${({theme}) => theme.color.primary};
`

const HeaderInnerL = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 100%;
`