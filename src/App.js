import { Component } from "react";
import Header from "./common/header/Header";
import Routes from "./common/Routes";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}
export default App;
