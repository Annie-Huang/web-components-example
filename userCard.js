const template = document.createElement('template');
template.innerHTML = `
    <style>
        h3 {
            color: coral;
        }
    </style>
    <div class="user-card">
        <img />
        <div>
            <h3></h3>
            <div class="info">
                <p>EMAIL</p>
                <p>PHONE</p>
            </div>
            <button id="toggle-info">Hide Info</button>
        </div>    
    </div>
`;



class UserCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        // cloneNode: Returns a copy of node. If deep is true, the copy also includes the node's descendants.
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');

        // this.innerHTML = 'John Doe';
        // this.innerHTML = `<h3>${this.getAttribute('name')}</h3>`;
        // // This will keep this and parent component as coral, but we want style to be encapsulated.
        // this.innerHTML = `<style>h3 {color: coral}</style><h3>${this.getAttribute('name')}</h3>`;
    }
}

window.customElements.define('user-card', UserCard);
