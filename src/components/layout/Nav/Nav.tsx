import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'

export const Nav = () => {
    return (
        <NavL>
            <NavItemL to={'#'}>
                About
            </NavItemL>
            <NavItemL to={'#'}>
                Skills
            </NavItemL>
            <NavItemL to={'#'}>
                Projects
            </NavItemL>
            <NavItemL to={'#'}>
                Contacts
            </NavItemL>
        </NavL>
    )
}

// Styles
const NavL = styled.nav`
  display: flex;
  justify-content: space-between;
  
  width: 300px;

  border: 1px solid;
`

const NavItemL = styled(Link)`
  
`