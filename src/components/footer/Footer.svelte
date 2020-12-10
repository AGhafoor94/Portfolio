<script>
  import Portfolio from "../../pages/Portfolio.svelte";
</script>

<style>
  .main-footer {
    padding: 1rem 0;
    position: relative;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: #fff;
  }
  img {
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 10%;
  }
  @media (max-width: 980px) {
    img {
      width: 10%;
    }
  }
</style>

<div class="main-footer">
  <div class="container">
    <hr />
    <div class="columns is-desktop">
      <div class="column">
        <a href="https://github.com/AGhafoor94" target="_blank"><img
            src="/Portfolio/github_icon.png"
            alt="Github Icon" /></a>
      </div>
      <div class="column">
        <p class="subtitle" style="color: #ff8C00">Portfolio by Adnan</p>
      </div>
      <div class="column">
        <a
          href="https://uk.linkedin.com/in/adnan-ghafoor-9bb42b1aa"
          target="_blank"><img
            src="/Portfolio/linkedin_logo.png"
            alt="Linkedin Icon" /></a>
      </div>
    </div>
  </div>
</div>
