import {createGlobalStyle} from "styled-components";
import {ThemeType} from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @import url('${({theme}) => theme.font.source}');

  *,
  *:before,
  *:after {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({theme}) => theme.font.family.default};
    font-size: ${({theme}) => theme.font.size.default};
  }
`