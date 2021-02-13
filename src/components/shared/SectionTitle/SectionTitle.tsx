import React from 'react'
import styled from 'styled-components'


type SectionTitleProps = {
    children: React.ReactNode
}

export const SectionTitle: React.FC<SectionTitleProps> = ({children}) => {
    return (
        <SectionTitleL>
            {children}
        </SectionTitleL>
    )
}

// Styles
const SectionTitleL = styled.h2`
  height: 100vh;
  background-color: ${({theme}) => theme.color.secondary};
`
