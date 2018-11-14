import './style.css';

export default {
  render(h) {
    return (
      <section class="container">
        <div>
          <h1 class="title">
            {{ name }}
          </h1>
          <h2 class="subtitle">
            {{ description }}
          </h2>
          <div class="links">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              class="button--green">Documentation</a>
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              class="button--grey">GitHub</a>
          </div>
        </div>
      </section>
    );
  }
}