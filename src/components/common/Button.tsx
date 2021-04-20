import React, {ButtonHTMLAttributes, DetailedHTMLProps, ReactComponentElement} from "react";
import styled, {StyledComponentProps} from "styled-components/macro";
import {ThemeType} from "../../styles/theme";
import {MontB1Bold} from "../typography/decorative/MontB1Bold";
import {MontDefBold} from "../typography/decorative/MontDefBold";

export const Button: React.FC<PropsType> = (props) => {

    const {
        icon,
        ...restProps
    } = props

    return (
        <>
            <StyledButton{...restProps}>{icon}<MontDefBold>{props.children}</MontDefBold></StyledButton>
        </>
    );
}

// Styles
const StyledButton = styled.button<StyledComponentProps<any, ThemeType, any, any>>`
  display: flex;
  align-items: center;
  
  padding: .7rem 1.5rem .7rem 1rem;
  
  border: none;
  border-radius: ${({theme}) => theme.variable.borderRadius};
  cursor: pointer;
  background-color: ${({theme}) => theme.color.white};
  color: ${({theme}) => theme.color.black};

  box-shadow: ${({theme}) => theme.shadow['1']};
  
  transition: all ease-in-out .2s;
  
  & svg {
    fill: ${({theme}) => theme.color.black};
    height: 2.272rem;
    width: 2.272rem;
  }
  
  & p {
    margin-left: .5rem;
  }
  
  & a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background-color: ${({theme}) => theme.color.secondary.main};
    box-shadow: ${({theme}) => theme.shadow['3']};
    color: ${({theme}) => theme.color.white};

    transform: translateY(-3px);
    
    & svg {
      fill: ${({theme}) => theme.color.white};
    }
  }
  
  &:active {
    background-color: ${({theme}) => theme.color.secondary.dark};
    box-shadow: ${({theme}) => theme.shadow['1']};

    transform: translateY(0);
  }
`

// Types

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type PropsType = DefaultButtonPropsType & {
    icon?: ReactComponentElement<any>
}