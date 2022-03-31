import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    --red: #FF4949;
    --black: #202020;
    --yellow: #ffc600;
    --white: #fff;
    --offWhite: #ededed;
    --grey: #efefef;
    --maxWidth: 1450px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.2);
    --bg: rgb(102, 56, 25);
    --bg_link: #92570b;
    --title: #442502;
    --link_hover: rgba(134, 80, 9, 0.2);
    --nav-size: 60px;
    --border: 2px solid #474a4d;
    --sm: 479;
    --border-radius: 8px;
    --speed: 500ms;

    font-size: 2rem;
    min-height: 100vh;
    background-color: var(--black);
  }


  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: var(--offWhite);
  }
`;
