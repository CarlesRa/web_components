export class HolaMundo extends HTMLElement {
    constructor() {
        console.log('HolaMundo charged')
        super();
        this.shadow = this.attachShadow({mode: 'open'})
        this.nameValue;
        this.surname;
    }

    static get observedAttributes() {
        return ['name', 'surname'];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        switch(nameAttr) {
            case 'name': 
                this.name = newValue;
            break;
            case 'surname':
                this.surname = newValue;
            break;
        }
    }

    connectedCallback() {
        this.shadow.innerHTML = `<style>h1{color: green;}</style><h1>
        Hola ${this.name} ${this.surname}
        </h1>`;
        this.style.color = 'blue';
    }
}
window.customElements.define('hola-mundo', HolaMundo);