import react from "../assets/svg/stack/react.svg";
import redux from "../assets/svg/stack/redux.svg";
import javaScript from "../assets/svg/stack/javaScript.svg";
import typeScript from "../assets/svg/stack/typeScript.svg";
import rest from "../assets/svg/stack/rest.svg";
import postman from "../assets/svg/stack/postman.svg";
import html from "../assets/svg/stack/html.svg";
import css from "../assets/svg/stack/css.svg";
import sass from "../assets/svg/stack/sass.svg";
import styledComponents from "../assets/svg/stack/styledComponents.svg";
import github from "../assets/svg/stack/github.svg";
import materialUI from "../assets/svg/stack/materialUI.svg";
import storybook from "../assets/svg/stack/storybook.svg";
import strapi from "../assets/svg/stack/strapi.svg";
import heroku from "../assets/svg/stack/heroku.svg";
import jest from "../assets/svg/stack/jest.svg";

export const examples = [
    {
        id: 1,
        title: 'To do list',
        technologies: [react, redux, typeScript, materialUI, styledComponents, storybook, jest],
        description: 'Fully working To do list application, made using React with Redux-toolkit, contains unit tests. This project showcases most of my skills.',
        demoLink: 'https://otusmark.github.io/todolist/',
        codeLink: 'https://github.com/OtusMark/todolist'
    },
    {
        id: 2,
        title: 'Marketing company website',
        technologies: [react, redux, typeScript, styledComponents, strapi, heroku],
        description: 'Landing page demo build on React with Strapi CMS running on Heroku. Please wait while it loads, because heroku free accounts go to sleep often.',
        demoLink: 'https://otusmark.github.io/chess-marketing/',
        codeLink: 'https://github.com/OtusMark/chess-marketing'
    },
    {
        id: 3,
        title: 'Styled-Components library',
        technologies: [react, typeScript, styledComponents],
        description: 'styled components library I created for personal use. You are free to use these components if you want in your project.',
        demoLink: 'https://otusmark.github.io/react-styled-components-library/',
        codeLink: 'https://github.com/OtusMark/react-styled-components-library'
    },
    {
        id: 4,
        title: 'Counter',
        technologies: [react, redux, typeScript, sass],
        description: 'Simple counter with settings menu, menu values are stored in local storage.',
        demoLink: 'https://otusmark.github.io/counter/',
        codeLink: 'https://github.com/OtusMark/counter'
    },
    // {
    //     id: 4,
    //     title: 'Social network',
    //     technologies: [react, redux, typeScript, styledComponents],
    //     description: 'Unfinished learning project. I used too learn from it a lot. As for right now contains many legacy code and no styles.',
    //     demoLink: 'https://otusmark.github.io/social-network/',
    //     codeLink: 'https://github.com/OtusMark/social-network'
    // }
]