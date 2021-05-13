<script>
  import { fade, fly } from "svelte/transition";
</script>

<main>
  <section class="hero is-medium" style="background-color: #333333">
    <div class="hero-body">
      <div class="container">
        <img src="/Portfolio/palestine-flag.jpg" alt="FREE PALESTINE" />
        <h1>FREE PALESTINE</h1>
        <h2
          in:fly={{ y: 200, duration: 2000 }}
          out:fade|local
          class="subtitle"
          style="color: #fff"
        >
          FREE PALESTINE AND BLACK LIVES MATTER
        </h2>
      </div>
    </div>
  </section>
</main>
