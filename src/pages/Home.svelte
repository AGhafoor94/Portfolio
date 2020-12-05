<script>
  import { fade } from "svelte/transition";
</script>

<main in:fade out:fade|local>
  <section class="hero is-medium is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title" style="color: #ff8C00">Portfolio</h1>
        <h2 class="subtitle">Welcome to my new portfolio made with Svelte</h2>
      </div>
    </div>
  </section>
</main>
