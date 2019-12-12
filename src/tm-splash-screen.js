import {html, css, LitElement} from 'lit-element';

import '@wonkytech/tm-firebase-user';

window.customElements.define('tm-splash-screen', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String},
            login: {type: Boolean},
            config: {type: Object}
        }
    }

    constructor() {
        super();
        this.heading = 'Hello World!';
        this.login = false;
        this.config = undefined;
    }

    firstUpdated(_changedProperties) {
        this.splash = this.shadowRoot.getElementById('splash');
    }

    static get styles() {
        // language=CSS
        return css `
            :host {
            }


            .container {
                position: absolute;
                left: 0;
                top: 0;
                background: lightblue;
                width: 100vw;
                height: 100vh;
                box-sizing: border-box;
                //border: solid red 2px;
                display: flex;
                flex-direction: row;
                justify-content: center;
            }

            .body {
                box-sizing: border-box;
                //border: solid blue 2px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            tm-firebase-user {
                /*--tm-firebase-user-color: #6200ee;*/
                --tm-firebase-user-color: blue;
                //width: 200px;
                margin-left: auto;
                margin-right: auto;
            }

            .message {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-bottom: 40px;
            }

            .body > h1 {
                text-align: center;
                margin-top: 0;
                color: blue;
            }

            ::slotted(*) {
                margin-left: auto;
                margin-right: auto;
            }

            .hidden {
                display: none;
            }

        `;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        // const loginElement = this.addLoginIfRequired();
        return html`
            <div id="splash" class="container hidden">
                <div class="body">
                    <h1>${this.heading}</h1>
                    <div class="message">
                        <slot></slot>
                    </div>
                    ${this.addLoginIfRequired()}
                </div>
            </div>
        `;
    }

    addLoginIfRequired() {
        if (this.login) {
            if (this.config) {
                return html`<tm-firebase-user .config="${this.config}"></tm-firebase-user>`;
            } else {
                return html`<tm-firebase-user></tm-firebase-user>`;
            }
        } else {
            return html``;
        }
    }

    show() {
        this.splash.classList.remove('hidden');
    }

    hide() {
        this.splash.classList.add('hidden');
    }
});
