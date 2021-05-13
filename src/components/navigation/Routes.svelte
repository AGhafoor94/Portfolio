<script>
  import { Route } from "svelte-routing";
  import Home from "../../pages/Home.svelte";
  import Portfolio from "../../pages/Portfolio.svelte";
  import Store from "../../pages/Store.svelte";
</script>

<Route path="/Portfolio/" component={Home} name="main" />
<Route path="/Portfolio/portfolio" component={Portfolio} name="main" />
<Route path="/Portfolio/store" component={Store} name="main" />
