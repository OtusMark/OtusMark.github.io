import React from "react";
import styled, {StyledComponentProps} from "styled-components/macro";
import {MontB1Bold} from "./typography/decorative/MontB1Bold";
import {ThemeType} from "../styles/theme";
import Tilt from "react-parallax-tilt";

export const StackCard: React.FC<PropsType> = (props) => {

    const {
        iconURL,
        title
    } = props

    return (
        <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="30px">
            <StackCardWrapper>
                <TopBG/>
                <Circle>
                    <img src={iconURL} alt=""/>
                </Circle>
                <Title>{title}</Title>
            </StackCardWrapper>
        </Tilt>
    );
}

// Styles
export const StackCardWrapper = styled.div<StyledComponentProps<any, ThemeType, any, any>>`
  position: relative;

  width: 13rem;
  height: 19rem;

  border-radius: ${({theme}) => theme.variable.borderRadius};
  background-color: ${({theme}) => theme.color.white};
  color: ${({theme}) => theme.color.black};

  box-shadow: ${({theme}) => theme.shadow['1']};
`

const TopBG = styled.div`
  height: 6rem;
  width: 100%;

  background-color: ${({theme}) => theme.color.grey['700']};

  border-radius: ${({theme}) => theme.variable.borderRadius} ${({theme}) => theme.variable.borderRadius} 0 0;
`

const Circle = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 3rem;
  z-index: 1;

  width: 7rem;
  height: 7rem;

  background-color: ${({theme}) => theme.color.white};

  border-radius: 150px;
  box-shadow: ${({theme}) => theme.shadow['1']};

  & img {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    height: 4rem;
    width: 4rem;
  }
`

const Title = styled(MontB1Bold)`
  position: absolute;
  left: 1rem;
  bottom: 2rem;

  width: 11rem;

  text-align: center;
`

// Types
type PropsType = {
    iconURL: string
    title: string
}