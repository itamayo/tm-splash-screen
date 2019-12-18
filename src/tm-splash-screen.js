import {html} from 'lit-html';
import {LitElement, css} from 'lit-element';

import '@wonkytech/tm-firebase-user';

document.addEventListener('user-logged-in', () => console.log('AAAAAAAAAAAAAAAA'));

window.customElements.define('tm-splash-screen', class extends LitElement {

    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String},
            login: {type: Boolean},
            config: {type: Object},
            waitFor: {type: Array}
        }
    }

    constructor() {
        super();
        this.heading = '';
        this.login = false;
        this.config = undefined;
        this.waitFor = undefined;
    }

    firstUpdated(_changedProperties) {
        this.splash = this.shadowRoot.getElementById('splash');
        const {waitFor} = this;

        if (waitFor) {
            Promise.all(waitFor.map(name => customElements.whenDefined(name)))
                .then(() => console.log('TM-SPLASH-SCREEN: application good to go.'));
        }
    }

    connectedCallback() {
        super.connectedCallback();

        if (this.login) {
            this._loginListener = () => this.hide();
            this._logoutListener = () => this.show();
            document.addEventListener('user-logged-in', this._loginListener);
            document.addEventListener('user-logged-out', this._logoutListener);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.login) {
            document.removeEventListener('user-logged-in', this._loginListener);
            document.removeEventListener('user-logged-out', this._logoutListener);
            this._loginListener = undefined;
            this._logoutListener = undefined;
        }
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
                /*noinspection CssUnresolvedCustomProperty*/
                background: var(--tm-splash-screen-background, white);
                width: 100vw;
                height: 100vh;
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                justify-content: center;
            }

            .body {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            tm-firebase-user {
                /*noinspection CssUnresolvedCustomProperty*/
                --tm-firebase-user-color: var(--tm-splash-screen-color, gray);
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
                /*noinspection CssUnresolvedCustomProperty*/
                color: var(--tm-splash-screen-color, gray);
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
        const {heading} = this;
        return html`
            <div id="splash" class="container">
                <div class="body">
                    <h1>${heading}</h1>
                    <div class="message">
                        <slot></slot>
                    </div>
                    ${this.addLoginIfRequired()}
                </div>
            </div>
        `;
    }

    addLoginIfRequired() {
        const {login, config} = this;
        if (login) {
            if (config) {
                return html`<tm-firebase-user id="login" .config="${config}"></tm-firebase-user>`;
            } else {
                return html`<tm-firebase-user id="login"></tm-firebase-user>`;
            }
        } else {
            return html``;
        }
    }

    logout() {
        this.show();
        if (this.login) {
            this.shadowRoot.getElementById('login').logout();
        }
    }

    show() {
        const {splash} = this;
        splash.classList.remove('hidden');
    }

    hide() {
        const {splash} = this;
        splash.classList.add('hidden');
    }
});
