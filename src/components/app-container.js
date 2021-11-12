import "./app-post";
import data from "./data";

const template = document.createElement("template");

template.innerHTML = `
  <main class="container">
  <!-- posts -->
    <section class="posts-section">
      <div class="posts">

        ${data.map(post =>
          `<post-item image=${post.image}>
            <span slot="title">${post.title}</span>
            <span slot="author">${post.author}</span>
            <span slot="description">${post.description.substring(0, 50)}</span>
            <span slot="details">${post.description}</span>
          </post-item>`
        ).join("")}

      </div>
    </section>
  <!-- posts -->
  </main>
`

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("app-container", AppContainer);
