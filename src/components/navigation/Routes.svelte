<script>
  import { Route } from "svelte-routing";
  import Home from "../../pages/Home.svelte";
  import Portfolio from "../../pages/Portfolio.svelte";
</script>

<div>
  <Route path="/Portfolio/" component={Home} name="main" />
  <Route path="/Portfolio/portfolio" component={Portfolio} name="main" />
</div>
