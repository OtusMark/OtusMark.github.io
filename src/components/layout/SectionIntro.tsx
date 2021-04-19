import React from "react";
import styled from "styled-components/macro";
import {MontB3Bold} from "../typography/decorative/MontB3Bold";
import {DefaultB2Reg} from "../typography/default/DefaultB2Reg";


export const SectionIntro: React.FC<PropsT> = (props) => {

    const {
        title,
        subtitle
    } = props

    return (
        <SectionIntroWrapper>
            <Title>
                {title}
            </Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </SectionIntroWrapper>
    )
}

// Styles
const SectionIntroWrapper = styled.div`
  Padding: 4.5rem 0;
`

const Title = styled(MontB3Bold)`
  padding-bottom: 1.5rem;
`

const Subtitle = styled(DefaultB2Reg)`
  width: 66%;
  
  @media(max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    width: 100%;
  }
`

// Types
type PropsT = {
    title: string
    subtitle: string
}