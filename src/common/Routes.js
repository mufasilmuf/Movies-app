import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "../screens/details/Details";
import Home from "../screens/home/Home";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Details" component={Detail} />
      </Switch>
    );
  }
}
export default Routes;
