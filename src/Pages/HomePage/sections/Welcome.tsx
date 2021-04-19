import {Button} from "../../../components/common/Button";
import {ReactComponent as GitHub} from "../../../assets/svg/common/GitHub.svg";
import {ReactComponent as LinkedIn} from "../../../assets/svg/common/LinkedIn.svg";
import {ReactComponent as CodeWars} from "../../../assets/svg/common/CodeWars.svg";
import styled from "styled-components/macro";
import profileImage from '../../../assets/img/profile.jpg'
import {SectionWrapper} from "../../../components/layout/SectionWrapper";
import Tilt from "react-parallax-tilt";
import React from "react";

export const Welcome = () => {
    return (
        <StyledMain id='Home'>
            <SectionWrapper>
                <WelcomeInner>
                    <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="30px">
                        <StyledImg src={profileImage}/>
                    </Tilt>
                    <InfoBlock>
                        <TextWrapper>
                            <StyledH1>Frontend developer</StyledH1>
                            <StyledH2>Hi, my name is Mark I am Frontend developer from Saint-Petersburg
                                Russia.</StyledH2>
                        </TextWrapper>
                        <ButtonsWrapper>
                            <Button icon={<GitHub/>}><a href="https://github.com/OtusMark" target='_blank'>Github</a></Button>
                            <Button icon={<LinkedIn/>}><a href="https://www.linkedin.com/in/kadiner-mark" target='_blank'>LinkedIn</a></Button>
                            <Button icon={<CodeWars/>}><a href="https://www.codewars.com/users/Asio-otus" target='_blank'>Codewars</a></Button>
                        </ButtonsWrapper>
                    </InfoBlock>
                </WelcomeInner>
            </SectionWrapper>
        </StyledMain>
    )
}

// Styles
const StyledMain = styled.main`
  margin-top: ${({theme}) => theme.variable.headerHeight};
`

const WelcomeInner = styled.div`
  height: 24rem;
  display: flex;
`

const StyledImg = styled.img`
  height: 24rem;
  width: 27rem;

  border-radius: ${({theme}) => theme.variable.borderRadius};
  box-shadow: ${({theme}) => theme.shadow["1"]};

  object-fit: cover;
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 4.5rem;
`

const TextWrapper = styled.div`
  width: 70%;
`

const StyledH1 = styled.h1`
  padding-bottom: 1.6rem;

  font-family: ${({theme}) => theme.font.family.montserrat};
  font-size: ${({theme}) => theme.font.size.b5};
  font-weight: 700;
`

const StyledH2 = styled.h2`
  font-family: ${({theme}) => theme.font.family.default};
  font-size: ${({theme}) => theme.font.size.b2};
  font-weight: 400;
`

const ButtonsWrapper = styled.div`
  display: flex;
  
  button:not(:first-child) {
    margin-left: 2rem;
  }
`