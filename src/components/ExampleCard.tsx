import React from "react";
import styled, {StyledComponentProps} from "styled-components/macro";
import {ThemeType} from "../styles/theme";
import {Button} from "./common/Button";
import {MontB2Bold} from "./typography/decorative/MontB2Bold";
import Tilt from "react-parallax-tilt";
import {IconCircle} from "./common/IconCircle";

export const ExampleCard: React.FC<PropsType> = (props) => {

    const {
        title,
        technologies,
        description,
        demoLink,
        codeLink

    } = props

    return (
        <Tilt glareEnable={true}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="bottom"
              glareBorderRadius="30px">
            <ExampleCardWrapper>
                <TopBG>
                    <Title>{title}</Title>
                </TopBG>
                <IconsWrapper>
                    {technologies.map(item => <IconCircle key={item}><img src={item}/></IconCircle>)}
                </IconsWrapper>
                <Description>
                    {description}
                </Description>
                <ButtonWrapper>
                    <a href={demoLink} target='_blank'><Button>Demo</Button></a>
                    <a href={codeLink} target='_blank'><Button>Code</Button></a>
                </ButtonWrapper>
            </ExampleCardWrapper>
        </Tilt>
    );
}

// Styles
export const ExampleCardWrapper = styled.div<StyledComponentProps<any, ThemeType, any, any>>`
  position: relative;

  width: 27.5rem;
  height: 21rem;

  border-radius: ${({theme}) => theme.variable.borderRadius};
  background-color: ${({theme}) => theme.color.white};
  color: ${({theme}) => theme.color.black};

  box-shadow: ${({theme}) => theme.shadow['1']};
`

const TopBG = styled.div`
  position: absolute;
  left: 0;

  height: 6rem;
  width: 100%;

  background-color: ${({theme}) => theme.color.grey['700']};

  border-radius: ${({theme}) => theme.variable.borderRadius} ${({theme}) => theme.variable.borderRadius} 0 0;
`

const Title = styled(MontB2Bold)`
  position: absolute;
  top: 1.25rem;
  left: 1.75rem;

  color: ${({theme}) => theme.color.white};
`

const IconsWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  left: 1.75rem;
  z-index: 1;

  display: flex;

  ${IconCircle}:not(:first-child) {
    margin-left: .5rem;
  }
`

const Description = styled.p`
  position: absolute;
  left: 1.75rem;
  top: 8.5rem;

  width: 24rem;
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 1.75rem;
  z-index: 100;

  display: flex;
  align-items: center;

  a:not(:first-child) {
    margin-left: 1.5rem;
  }
`

// Types
type PropsType = {
    title: string
    technologies: Array<string>
    description: string
    demoLink: string
    codeLink: string
}