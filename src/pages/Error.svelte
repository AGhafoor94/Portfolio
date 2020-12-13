<style>
  main {
    text-align: center;
  }
  h1 {
    font-weight: bold;
    color: #333333;
  }
  p {
    color: darkred;
    padding: 10px 0;
  }
</style>

<main>
  <slot name="statusCode" />

  <slot />
</main>
