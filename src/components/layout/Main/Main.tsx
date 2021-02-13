import React from 'react'
import styled from 'styled-components'
import {Container} from "../../shared/Container/Container";

export const Main = () => {
    return (
        <MainL>
            <Container>
                <MainInnerL>
                    <InfoL>
                        <TitleL>
                            Title here
                        </TitleL>
                        <SubtitleL>
                            Subtitle here
                        </SubtitleL>
                    </InfoL>
                    <ImageL>
                        Image here
                    </ImageL>
                </MainInnerL>
            </Container>
        </MainL>
    )
}

// Styles
const MainL = styled.main`
  height: 100vh;
  background-color: ${({theme}) => theme.color.secondary};
`

const MainInnerL = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 100%;
`

const InfoL = styled.div`
  width: 50%;
`

const TitleL = styled.h1`

`

const SubtitleL = styled.p`

`

const ImageL = styled.div`
  width: 30%;
`