import {html, render} from "./web_modules/lit-html.js";

render(html`
    <style>
        html {
            --tm-splash-screen-background: lightgray; 
            --tm-splash-screen-color: black; 
        }
    </style>
`, document.querySelector('head'));

render(html`
    <style>
        body {
          padding: 0;
          margin: 0;
        } 
        
        img {
            width: 200px;
        }
        
        h1,h3 {
            text-align: center;
        }
        
        div {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        button {
            border: solid grey 1px;
        }
        
    </style>
    <h1>This is a test application.</h1>
    <h3>Logging out should cause the splash screen to return.</h3>
    <div>
        <button @click="${logout}">LOGOUT</button>    
    </div>
    <tm-splash-screen id="splash" heading="This is a Splash Screen" login>
        <img src="images/legohead-transparent.png"/>
        <span>The purpose  of this web component,</span>
        <span>is to make it easier to add a splash screen,</span>
        <span>and optionally require users to login.</span>
    </tm-splash-screen>
`, document.querySelector('body'));

function logout() {
    document.getElementById('splash').logout();
}