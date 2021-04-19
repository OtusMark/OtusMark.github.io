import styled, {keyframes, StyledComponentProps} from "styled-components/macro";
import {Container} from "../Container";
import {useEffect, useState} from "react";
import {Link as LinkScroll} from "react-scroll/modules";
import {ThemeType} from "../../../styles/theme";
import {Burger} from "./Burger";
import {MontB1Bold} from "../../typography/decorative/MontB1Bold";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0);

    const listenToScroll = () => {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener('scroll', listenToScroll);
        }
        watchScroll();
        return () => {
            window.removeEventListener('scroll', listenToScroll);
        };
    });

    const toggleBurgerMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeaderMain scrollPosition={scrollY}>
            <Container>
                <HeaderInner >
                    <NavWrapper isOpen={isOpen} >
                        <NavItems>
                            <LinkStyled to={'Home'}
                                        onClick={toggleBurgerMenu}
                                        smooth={true}
                                        offset={-100}
                                        spy={true}
                                        duration={500}>
                                <MontB1Bold>Home</MontB1Bold>
                            </LinkStyled>
                            <LinkStyled to={'MyStack'}
                                        onClick={toggleBurgerMenu}
                                        smooth={true}
                                        offset={-20}
                                        spy={true}
                                        duration={500}>
                                <MontB1Bold>My stack</MontB1Bold>
                            </LinkStyled>
                            <LinkStyled to={'CodeExamples'}
                                        onClick={toggleBurgerMenu}
                                        smooth={true}
                                        offset={-20}
                                        spy={true}
                                        duration={500}>
                                <MontB1Bold>Code examples</MontB1Bold>
                            </LinkStyled>
                            <LinkStyled to={'ContactMe'}
                                        onClick={toggleBurgerMenu}
                                        smooth={true}
                                        offset={-20}
                                        spy={true}
                                        duration={500}>
                                <MontB1Bold>Contacts</MontB1Bold>
                            </LinkStyled>
                        </NavItems>
                    </NavWrapper>

                    <Circle>
                        <Burger onClick={toggleBurgerMenu} isOpen={isOpen}/>
                    </Circle>

                </HeaderInner>
            </Container>
        </HeaderMain>
    )
}

const HeaderMain = styled.header<StyledComponentProps<any, any, any, any>>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: ${({theme}) => theme.variable.headerHeight};

  background: ${({scrollPosition}) => scrollPosition > 0 && 'rgba(255, 255, 255, .5)'};
  box-shadow: ${({theme, scrollPosition}) => scrollPosition > 0 && theme.shadow['1']};

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    background: none;
    box-shadow: none;
  }
`

const HeaderInner = styled.div<StyledComponentProps<any, any, any, any>>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: ${({theme}) => theme.variable.headerHeight};

  transition: all ease-in .2s;

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    justify-content: flex-end;
  }
`

// ...Animation
const LinkFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const LinkStyled = styled(LinkScroll)`
  display: inline-block;

  white-space: nowrap;

  opacity: 1;
  transition: all .2s;

  font-size: ${({theme}) => theme.font.size.b1};

  cursor: pointer;

  &.active {
    color: ${({theme}) => theme.color.secondary.main};
  }

  &:hover {
    color: ${({theme}) => theme.color.secondary.main};
  }
`

const NavItems = styled.nav`
  display: flex;
  justify-content: space-between;
  
  a:not(:first-child) {
    margin-left: 3rem;

    @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
      margin: 0;
    }
  }
`

const NavWrapper = styled.div<StyledComponentProps<any, ThemeType, any, any>>`

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    position: absolute;
    right: 0;
    top: 0;

    height: 100vh;
    width: 100vw;

    background: ${({theme}) => theme.color.white};

    transform: ${({isOpen}) => !isOpen && 'translateX(100%)'};
    transition: transform .5s ease-in;

    ${NavItems} {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      height: inherit;
      margin: 0;
      padding: 150px 20px;

      font-size: 1.1rem;
    }

    ${LinkStyled} {
      animation: ${({isOpen}) => isOpen && LinkFade} 3s ease forwards;
    }
  }
`

const Circle = styled.div`
  position: relative;
  display: none;
  
  height: 4rem;
  width: 4rem;
  
  background-color: ${({theme}) => theme.color.white};
  
  border-radius: 150px;
  box-shadow: ${({theme}) => theme.shadow['1']};

  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`