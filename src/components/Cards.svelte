<script>
  import { fade } from "svelte/transition";
  export let title, subtitle, link1, link2, id;
</script>

<style>
  .card {
    display: block;
    text-align: center;
    width: 30%;
    float: left;
    height: auto;
    box-shadow: none;
    border-radius: 0;
    margin: 1rem;
  }
  .card-container {
    margin: 0 auto;
    display: block;
    text-align: center;
  }
  .card-content {
    height: 8rem;
  }
</style>

<div class="card-container">
  <div class="card" {id} in:fade out:fade|local>
    <div class="card-content">
      <h1 style="color:#ff8C00">{title}</h1>
      <h2>{subtitle}</h2>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          <a href={link1} target="_blank"><slot name="link-1-text" /></a>
        </span>
      </p>
      <p class="card-footer-item">
        <span>
          <a href={link2} target="_blank"><slot name="link-2-text" /></a>
        </span>
      </p>
    </footer>
  </div>
</div>
