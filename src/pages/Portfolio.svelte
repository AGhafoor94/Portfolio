<script>
  import { fade, fly } from "svelte/transition";
  import axios from "axios";
  import Cards from "../components/Cards.svelte";
  import Error from "./Error.svelte";

  const getGitHubRepos = async () =>
    await axios.get("https://api.github.com/users/AGhafoor94/repos");
  let promise = getGitHubRepos();
  export let githubStore;
</script>

<style>
  .cards {
    margin: 0 auto;
    display: block;
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

{#await promise}
  <img src="/Portfolio/loading.svg" alt="Loading spinner" />
{:then items}
  <main>
    <div in:fly={{ y: 200, duration: 2000 }} out:fade|local class="cards">
      {#each items as item, index}
        <Cards
          title={item.name}
          subtitle={item.description}
          link1={item.html_url}
          link2={item.homepage}
          id={index}>
          <p slot="link-1-text">GitHub Url</p>
          <p slot="link-2-text">Homepage</p>
        </Cards>
        <button
          on:click={() => {
            githubStore.addToStore(index);
          }}>Add to Store</button>
      {/each}
    </div>
  </main>
{:catch error}
  <Error>
    <h1 class="title" slot="statusCode">{error.response.status}</h1>
    <p class="subtitle">{error.message}</p>
  </Error>
{/await}
