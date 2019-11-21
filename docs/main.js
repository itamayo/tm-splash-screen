import {html, render} from "./web_modules/lit-html.js";

import './web_modules/@wonkytech/tm-splash-screen.js';

render(html`
    <style>
        body {
          //background-color: lightgray;
          padding: 0;
          margin: 0;
        } 
        
        span {
            //text-align: center;
            //border: solid red 1px;;
        }
        
        img {
            width: 200px;
        }
    </style>
    <h1>This is a test application.</h1>
    <tm-splash-screen heading="This is a Splash Screen" login>
        <img src="images/legohead-transparent.png"/>
        <span>The purpose  of this web component,</span>
        <span>is to make it easier to add a splash screen,</span>
        <span>and optionally require users to login.</span>
    </tm-splash-screen>
`, document.querySelector('body'));