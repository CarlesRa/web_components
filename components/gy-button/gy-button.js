const template = document.createElement('template');
const DEFAULT_CSS_CLASS = 'default';
export class GYButton extends HTMLElement {
    buttonTemplate = `
        <style>
            button {
                padding: 5px; 
                border-radius: 5px; 
                cursor: pointer;
                font-size: 1.2rem
            }
            .default {
                background-color: black;
                color: white;
            }
            .blue {
                background-color: blue;
                color: white;
            }
            .magenta {
                background-color: magenta;
                color: white;
            }
        </style>
        <button 
            id="gy-button" 
            class="btn">
            ${ this.text ?? 'Button' }
        </button>
    `;

    constructor() {
        console.log('%c Component: GYButton', 'color: #bada55');
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['text', 'type'];
    }

    get text() {
        return this.getAttribute('text');
    }

    set text(value) {
        this.setAttribute('text', value);
    }

    get type() {
        return this.getAttribute('type');
    }

    set type(value) {
        return this.setAttribute('type', value);
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        switch(prop) {
            case 'text': 

                break;
            case 'type':
                
                break;
        }
    }

    emmitEvent() {
        const messageEvent = new CustomEvent('message', {
            bubbles: true
        });
        this.btn.dispatchEvent(messageEvent);
    }

    render() {
        template.innerHTML = this.buttonTemplate;
        this.shadow.appendChild(template.content.cloneNode(true));
        this.btn = this.shadow.querySelector('#gy-button');
        this.btn.addEventListener('click', this.emmitEvent.bind(this));
        switch(this.type) {
            case 'blue':
                this.btn.className = this.type;
                break;
            case 'magenta': 
                this.btn.className = this.type;
                break;
            default :
                this.btn.className = DEFAULT_CSS_CLASS;
        }
    }
}
customElements.define('gy-button', GYButton);