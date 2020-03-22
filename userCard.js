class UserCard extends HTMLElement {
    constructor() {
        super();
        // this.innerHTML = 'John Doe';
        this.innerHTML = `${this.getAttribute('name')}`;
    }
}

window.customElements.define('user-card', UserCard);
