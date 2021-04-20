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

                    <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom"
                          glareBorderRadius="30px">
                        <Photo>
                            <StyledImg src={profileImage}/>
                        </Photo>
                    </Tilt>

                    <InfoBlock>
                        <TextWrapper>
                            <StyledH1>Frontend developer</StyledH1>
                            <StyledH2>Hi, my name is Mark I am Frontend developer from Saint-Petersburg,
                                Russia.</StyledH2>
                        </TextWrapper>
                        <ButtonsWrapper>
                            <a href="https://github.com/OtusMark"
                               target='_blank'><Button icon={<GitHub/>}>Github</Button></a>
                            <a href="https://www.linkedin.com/in/kadiner-mark"
                               target='_blank'><Button icon={<LinkedIn/>}>LinkedIn</Button></a>
                            <a href="https://www.codewars.com/users/Asio-otus"
                               target='_blank'><Button icon={<CodeWars/>}>Codewars</Button></a>
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

  display: flex;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Photo = styled.div`
  width: 100%;
  height: 24rem;
`

const StyledImg = styled.img`
  height: 100%;
  width: 100%;

  border-radius: ${({theme}) => theme.variable.borderRadius};
  box-shadow: ${({theme}) => theme.shadow["1"]};

  object-fit: cover;
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 4.5rem;

  @media (max-width: 1300px) {
    padding: 2rem 0;
  }
`

const TextWrapper = styled.div`
  width: 70%;

  @media (max-width: 1300px) {
    width: 100%;
    padding-bottom: 2rem;
  }
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

  a:not(:first-child) {
    margin-left: 2rem;
  }

  @media (max-width: 1300px) {
    flex-direction: column;

    a:not(:first-child) {
      margin: 0;
    }

    a:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`