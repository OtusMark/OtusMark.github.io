import React from 'react'
import styled from 'styled-components'

export const SkillsCard = () => {
    return (
        <SkillsCardL>
            <TitleL>
                SkillsCard title
            </TitleL>
            <TextL>
                SkillsCard text
            </TextL>
        </SkillsCardL>
    )
}

// Styles
const SkillsCardL = styled.div`
  width: 300px;
  height: 300px;
`

const TitleL = styled.h3`
  
`

const TextL = styled.p`

`
