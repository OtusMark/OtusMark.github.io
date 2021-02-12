import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import {ThemeType} from "../../styles/theme";

type HeaderPropsType = {
    theme?: ThemeType
}

export const Nav: React.FC<HeaderPropsType> = ({theme, ...restProps}) => {
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
  border: 1px solid;
`

const NavItemL = styled(Link)`
  
`