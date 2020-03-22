const template = document.createElement('template');
template.innerHTML = `
    <style>
        /*h3 {*/
        /*    color: coral;*/
        /*}*/
        .user-card {
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
        }
        
        .user-card img {
            width: 100%;
        }
        
        .user-card button {
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>
    <div class="user-card">
        <img />
        <div>
            <h3></h3>
            <div class="info">
                <!-- <p><slot /></p> -->
                <p><slot name="email" /></p>
                <p><slot name="phone" /></p>
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
