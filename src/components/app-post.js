const template = document.createElement("template");

template.innerHTML = `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-transform: capitalize;
        font-family: "Poppins", sans-serif;
        line-height: 2;
      }

      *::selection {
        background-color: #fc5185;
      }

      html {
        overflow-x: hidden;
      }

      body {
        background-color: #25364A;
      }

      a {
        text-decoration: none;
      }

      li {
        list-style: none;
      }

      .container {
        margin: 0 auto;
        width: 80%;
        max-width: 60rem;
      }

      .btn {
        outline: none;
        border: none;
        border-radius: 0.4rem;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
      }
      .btn:hover {
        filter: brightness(90%);
      }

      .primary-btn {
        color: #f0f0f0;
        filter: brightness(97%);
        background-color: #fc5185;
      }

      .post {
        background-color: #25364A;
        border-radius: 1rem;
        box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
      }
      .post .image img {
        object-fit: cover;
        width: 100%;
        height: 12rem;
      }
      .post .content {
        padding: 1.5rem;
      }
      .post .content .text .heading {
        border-bottom: solid 0.1rem #aaa;
        padding: 0.5rem 0;
      }
      .post .content .text p {
        padding: 0.5rem 0;
      }
      .post .content .action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      .post * {
        color: #f0f0f0;
      }

      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 9999;
      }
      .modal .post {
        position: relative;
        background-color: #2D4159;
        border-radius: 1rem;
        margin: 0 auto;
        width: 90%;
      }
      .modal .post .image img {
        width: 100%;
        height: 20rem;
        object-fit: cover;
      }
      .modal .post .content {
        padding: 0 2rem;
      }
      .modal .post .content h1 {
        font-size: 2rem;
      }
      .modal .post .content .text p {
        height: 5rem;
        overflow-y: scroll;
      }
      .modal .post .content .close {
        margin: 2rem 0;
      }

      .modal * {
        color: #f0f0f0;
      }

      .modal-active {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media (max-width: 769px) {
        .modal .posts-modal .post {
          justify-content: center;
          flex-direction: column;
        }
        .modal .posts-modal .post .content {
          overflow: scroll;
        }
      }
    </style>

    <article class="post">
      <figure class="image">
        <img />
      </figure>
      <div class="content">
        <div class="text">
          <div class="heading">
            <h1><slot name="title" /></h1>
            <small>wrttien by <slot name="author" /></small>
          </div>
          <p><slot name="description" /></p>
        </div>
        <div class="action">
          <button class="open btn primary-btn">read more</button>
        </div>
      </div>
    </article>

    <div class="modal">
        <article class="post">
            <figure class="image">
                <img />
            </figure>
            <div class="content">
              <div class="text">
                <p><slot name="details" /></p>
              </div>
              <button class="close btn primary-btn">close</button>
            </div>
        </article>
    </div>
`;

class PostItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const image = this.shadowRoot.querySelectorAll(".image img");
    image.forEach(img => {
      img.src = this.getAttribute("image");
    });
  }

  openModal(){
    this.shadowRoot.querySelector(".modal").classList.add("modal-active");
  }

  closeModal(){
    this.shadowRoot.querySelector(".modal").classList.remove("modal-active");
  }

  connectedCallback(){
    this.shadowRoot.querySelector(".open").addEventListener("click", () => this.openModal());
    this.shadowRoot.querySelector(".close").addEventListener("click", () => this.closeModal());
  }

  disconnectedCallback(){
    this.shadowRoot.querySelector(".open").removeEventListener("click", () => this.openModal());
    this.shadowRoot.querySelector(".close").removeEventListener("click", () => this.closeModal());
  }
}

window.customElements.define("post-item", PostItem);
