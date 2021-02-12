import React from 'react'
import styled from 'styled-components'
import {ThemeType} from "../../styles/theme";
import {Nav} from "../Nav/Nav";

type HeaderPropsType = {
    theme?: ThemeType
}

export const Header: React.FC<HeaderPropsType> = ({theme, ...restProps}) => {
    return (
        <HeaderL>
            <Nav/>
        </HeaderL>
    )
}

// Styles
const HeaderL = styled.div`
  height: 80px;
  background-color: ${({theme}) => theme.color.primary};
`