import { createGlobalStyle } from 'styled-components'
import { create } from 'domain'

import githubBackground from '../assets/githubBackground.svg'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body{
    background:#F0F0F3 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
    /* deixa a fonte mais rendonda e só funciona para o chrome, os 70% é para alinhar para direita */
}
body, input,button{
    font:16px Roboto,sans-serif;
}

#root {
    max-width:960px;
    margin: 0 auto;
    padding: 40px 20px;
}

button{
    cursor: pointer;
}
`;
