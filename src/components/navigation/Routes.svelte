<script>
    import { Route } from "svelte-routing";
    import Home from "../../pages/Home.svelte"
import Portfolio from "../../pages/Portfolio.svelte";
   
  </script> 

<div>
  <Route path="/" component={Home} name="main"/>
  <Route path="/portfolio"component={Portfolio} name="main"/>
</div>