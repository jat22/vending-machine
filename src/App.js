import './App.css';

import VendingMachine from "./VendingMachine"
import Soda from "./Soda";
import Chips from "./Chips";
import Candy from "./Candy";
import NavBar from "./NavBar";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/soda" component={Soda} />
        <Route exact path="/chips" component={Chips} />
        <Route exact path="/candy" component={Candy} />
        <Route exact path="/vending" component={VendingMachine} />
      </BrowserRouter>
    </div>
  );
}

export default App;
