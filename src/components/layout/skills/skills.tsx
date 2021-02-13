import React from 'react'
import styled from 'styled-components'
import {Container} from "../../shared/Container/Container";
import {SectionTitle} from "../../shared/SectionTitle/SectionTitle";
import {SkillsCard} from "./SkillsCard/SkillsCard";

export const Skills = () => {
    return (
        <SkillsL>
            <Container>
                <SkillsInnerL>
                    <SectionTitle>
                        Skills Title
                    </SectionTitle>
                    <CardContainerL>
                        <SkillsCard/>
                    </CardContainerL>
                </SkillsInnerL>
            </Container>
        </SkillsL>
    )
}

// Styles
const SkillsL = styled.div`
  height: 100vh;
  background-color: ${({theme}) => theme.color.secondary};
`

const SkillsInnerL = styled.div`
  display: flex;
`

const CardContainerL = styled.div`
  display: flex;
`