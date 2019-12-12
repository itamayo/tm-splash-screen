import {html, render} from "./web_modules/lit-html.js";

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
        h1,h3 {
            text-align: center;
        }
    </style>
    <h1>This is a test application.</h1>
    <h3>Splash screen should appear shortly, then disappear for a short while, and then return.</h3>
    <tm-splash-screen id="splash" heading="This is a Splash Screen">
        <img src="images/legohead-transparent.png"/>
        <span>The purpose  of this web component,</span>
        <span>is to make it easier to add a splash screen,</span>
        <span>and optionally require users to login.</span>
    </tm-splash-screen>
`, document.querySelector('body'));


const splash = document.getElementById('splash');

setTimeout(() => {
    splash.show();
}, 3000);

setTimeout(() => {
    splash.hide();
}, 5000);

setTimeout(() => {
    splash.show();
}, 7000);