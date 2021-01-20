import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Search from "./components/Search";
import DetailPage from './pages/DetailPage';
import { Switch, Route, Redirect } from "react-router-dom";
//import {withRouter} from 'react-router-dom';
import SearchResultPage from './pages/SearchResultPage'
function App() {
  return (
    <div className='App'>
      <Header /><Search></Search>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Switch>
      <Route exact path="/search/:searchQuery" component={SearchResultPage} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/detail/:id" component={DetailPage}/>
      <Redirect to="/"></Redirect>
      </Switch>
      </div>

    </div>
  );
}

export default App;
