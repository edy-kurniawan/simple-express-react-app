import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexMhsContainer from "./containers/IndexMhsContainer";
import CreateMhsContainer from "./containers/CreateMhsContainer";
import EditMhsContainer from "./containers/EditMhsContainer";

export default class App extends Component {
  state = {
    data: [
      {
        id: 1,
        nim: 160,
        nama: "edy",
        id_kelas: 1,
      },
      {
        id: 2,
        nim: 160,
        nama: "edy kurniawan",
        id_kelas: 1,
      },
    ],
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        {/* <BrowserRouter>
          <Route path="/" exact>
            <IndexMhsContainer data={this.state.data} />
          </Route>
          <Route path="/create" exact>
            <CreateMhsContainer />
          </Route>
          <Route path="/edit:id" exact>
            <EditMhsContainer />
          </Route>
        </BrowserRouter> */}
      </div>
    );
  }
}
