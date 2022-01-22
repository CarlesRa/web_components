export class GravityButton extends HTMLElement {

    text;

    constructor() {
        console.log('GyButton charged');
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['text', 'gy-style'];
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        console.log(prop);
        switch(prop) {
            case 'text': 
                this.text = newValue;
                this.render();
                break;
            case 'gy-style':
                this.render();
                const styleObject = JSON.parse(newValue);
                this.setStyle(styleObject);
                break;
        }
    }

    setStyle(styleObject) {
        const gyButton = this.shadow.querySelector('#gy-button');
        if (styleObject) {
            Object.keys(styleObject).forEach(style => {
                console.log(styleObject[style]);
            })
        }
    }

    click() {
        console.log('click');
    }
    render() {
        this.shadow.innerHTML = `
            <button id="gy-button">${ this.text }</button>
        `
    }
}
customElements.define('gy-button', GravityButton);