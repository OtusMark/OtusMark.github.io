import {Container} from "../../components/layout/Container";
import {Welcome} from "./sections/Welcome";
import {MyStack} from "./sections/MyStack";
import {CodeExamples} from "./sections/CodeExamples";
import {ContactMe} from "./sections/ContactMe";
import styled from "styled-components/macro";

import {ReactComponent as ReactIcon} from "../../assets/svg/homepage/react.svg";
import {ReactComponent as ReduxIcon} from "../../assets/svg/homepage/redux.svg";

export const HomePage = () => {
    return (
        <HomePageWrapper>
            <Container>
                <Welcome/>
                <MyStack/>
                <CodeExamples/>
                <ContactMe/>
            </Container>
            <BGIcon1/>
            <BGIcon2/>
        </HomePageWrapper>
    )
}

const HomePageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const BGIcon1 = styled(ReactIcon)`
  position: absolute;
  top: 10rem;
  right: -30%;
  z-index: -1;

  height: 120rem;
  width: 120rem;

  fill: ${({theme}) => theme.color.white};
  fill-opacity: .3;
`

const BGIcon2 = styled(ReduxIcon)`
  position: absolute;
  bottom: -10rem;
  left: -30%;
  z-index: -1;

  height: 120rem;
  width: 120rem;

  fill: ${({theme}) => theme.color.white};
  fill-opacity: .3;
`