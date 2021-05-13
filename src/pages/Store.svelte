<script>
  import Cards from "../components/Cards.svelte";

  export let githubStore;
  let cart = [];
</script>

{#if !cart}
  <p>None added</p>
{:else}
  <ul>
    {#each cart as store, index}
      <Cards
        title={store.name}
        subtitle={store.description}
        link1={store.html_url}
        link2={store.homepage}>
        <p slot="link-1-text">GitHub Url</p>
        <p slot="link-2-text">Homepage</p>
      </Cards>
      <button
        on:click={() => {
          githubStore.remove(index);
        }}>Remove from Store</button>
    {/each}
  </ul>
{/if}
