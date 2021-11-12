import "./components/app-header";
import "./components/app-container";
import "./components/app-footer";

const template = document.createElement("template");

template.innerHTML = `
  <app-header></app-header>
    <app-container></app-container>
  <app-footer></app-footer>
`

class AppPage extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}


window.customElements.define("app-page", AppPage);
