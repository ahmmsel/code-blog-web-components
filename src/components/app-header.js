const template = document.createElement("template");

template.innerHTML = `
  <header class="main-header">
    <div class="container">
      <div class="logo">
        <h1 class="title bi bi-code-slash"></h1>
        <h2 class="sub-title">codeBlog</h2>
      </div>
    </div>
  </header>
`

class Header extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("app-header", Header);
