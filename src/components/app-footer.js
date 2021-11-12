const template = document.createElement("template");

template.innerHTML = `
  <footer class="main-footer">
    <div class="container">
      <h2>codeBlog</h2>
      <ul class="footer-list">
        <li>
          <a href="#" class="bi bi-facebook"></a>
        </li>
        <li>
          <a href="#" class="bi bi-youtube"></a>
        </li>
        <li>
          <a href="#" class="bi bi-github"></a>
        </li>
      </ul>
    </div>
  </footer>
`;

class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("app-footer", AppFooter);
