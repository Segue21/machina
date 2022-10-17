import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Switch, HashRouter } from "react-router-dom";

import "./assets/scss/style.scss";

// pages for this product
import Components from "./views/components/components.jsx";

import FeatureComponent from "./views/components/featurecomponent.jsx";
import Cards from "./views/components/cards.jsx";
var hist = createBrowserHistory();


// target && document.querySelector(target).scrollIntoView();

ReactDOM.render(
  <HashRouter history={hist}>
  
      <Route path="/" component={Components} />

  </HashRouter>,
  document.getElementById("root")
  
);

// ReactDOM.render(
//   <React.StrictMode>
//     <HashRouter>
//     <Route path="/" component={Components} />
//     <Route path="/about" component={FeatureComponent} />
//     <Route path="/cards" component={Cards} />

//     </HashRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
