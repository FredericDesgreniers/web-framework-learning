import "solid-devtools";
import { render } from "solid-js/web";
import Home from "./Home";
import { Router, Route } from "@solidjs/router";
import Details from "./Details";

const RootLayout = (props) => (
  <>
    <a href="/">
      <h1>SOLIDJS Adopt Me</h1>
    </a>
    {props.children}
  </>
);

render(
  () => (
    <Router root={RootLayout}>
      <Route path="/details/:id" component={Details} />
      <Route path="/" component={Home} />
    </Router>
  ),
  document.body,
);
