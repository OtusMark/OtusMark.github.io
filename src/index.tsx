import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "styled-components";
import {NormalizeCss} from './styles/NormalizeCss';
import {GlobalStyles} from './styles/GlobalStyles';
import {theme} from "./styles/theme";
import {BrowserRouter} from "react-router-dom";
import {OverflowWrapper} from "./components/layout/OverflowWrapper";
import {positions, transitions, Provider as AlertProvider} from "react-alert";
import styled from "styled-components/macro";
import {ReactComponent as SuccessIcon} from '../src/assets/svg/alerts/success.svg'
import {ReactComponent as ErrorIcon} from '../src/assets/svg/alerts/error.svg'

// Alert options
const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
}

// @ts-ignore
const AlertTemplate = ({ style, options, message, close }) => (
    <Alert style={style}>
        {message}

        {options.type === 'info' && '!'}
        {options.type === 'success' && <SuccessIcon/>}
        {options.type === 'error' && <ErrorIcon/>}
        {/*<button onClick={close}>X</button>*/}
    </Alert>
)

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <NormalizeCss/>
            <GlobalStyles/>
            <AlertProvider template={AlertTemplate} {...options}>
                <OverflowWrapper>
                    <App/>
                </OverflowWrapper>
            </AlertProvider>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// Styles
const Alert = styled.div`
  display: flex;
  align-items: center;
  
  padding: 1rem 1.5rem;
  border-radius: ${({theme}) => theme.variable.borderRadius};
  background-color: ${({theme}) => theme.color.white};

  font-family: ${({theme}) => theme.font.family.montserrat};
  font-size: ${({theme}) => theme.font.size.b1};
  font-weight: 700;
  
  box-shadow: ${({theme}) => theme.shadow['1']};
  
  & svg {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
  }
`