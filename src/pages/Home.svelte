<script>
  import { fade, fly } from "svelte/transition";
</script>

<main>
  <section class="hero is-medium" style="background-color: #333333">
    <div class="hero-body">
      <div class="container">
        <img src="./palestine-flag.jpg" alt="FREE PALESTINE" />
        <h1>FREE PALESTINE</h1>
        <h2
          in:fly={{ y: 200, duration: 2000 }}
          out:fade|local
          class="subtitle"
          style="color: #fff"
        >
          Welcome to my new portfolio made with Svelte.<br />
          I will be updating this with things I am learning and animations
        </h2>
      </div>
    </div>
  </section>
</main>
