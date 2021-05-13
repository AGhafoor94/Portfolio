<script>
  import { Router, Link } from "svelte-routing";
  import Routes from "./Routes.svelte";
  import { fade } from "svelte/transition";
  import Footer from "../footer/Footer.svelte";

  const openNav = () => {
    const navbarBurger = document.querySelector(".navbar-burger");
    const navbarMenu = document.querySelector(".navbar-menu");
    navbarBurger.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  };

  export let url = "";
</script>

<style>
  nav {
    border-bottom: 0.2rem solid #ffcc00;
  }
  li,
  .navbar-item,
  a {
    color: #ffcc00;
  }
</style>

<div class="page-container">
  <div class="content-wrap">
    <Router {url}>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <ul class="navbar-item">
            <Link to="/Portfolio">
              <li>
                <img
                  src="/Portfolio/peace-symbol.svg"
                  width="100"
                  height="25"
                  alt="Nav brand" />
              </li>
            </Link>
          </ul>
          <a
            on:click={openNav}
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            in:fade>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div class="navbar-menu" id="navMenu">
          <div class="navbar-start">
            <li class="navbar-item" style="color: #ffcc00;">
              <Link to="/Portfolio">Home</Link>
            </li>
            <li class="navbar-item" style="color: #ffcc00;">
              <Link to="/Portfolio/portfolio">Portfolio</Link>
            </li>
            <a
              class="navbar-item"
              href="https://aghafoor94.github.io/Portfolio/cv_updated.pdf"
              target="_blank">CV</a>

            <li class="navbar-item" style="color: #ffcc00;">
              <Link to="/Portfolio/store">Trying Store</Link>
            </li>
          </div>
        </div>
      </nav>
      <Routes />
    </Router>
  </div>
  <Footer />
</div>
