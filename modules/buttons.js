export class GvButton extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    attributeChangedCallback(property, oldValue, newValue) {

    }
}
customElements.define('gv-button', GvButton);