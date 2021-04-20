import styled from "styled-components/macro";

export const IconCircle = styled.div`
  position: relative;
  
  width: 3rem;
  height: 3rem;

  min-width: 3rem;
  min-height: 3rem;

  background-color: ${({theme}) => theme.color.white};

  border-radius: 150px;
  box-shadow: ${({theme}) => theme.shadow['1']};

  & img {
    position: absolute;
    top: .65rem;
    left: .65rem;
    height: 1.7rem;
    width: 1.7rem;
  }
`