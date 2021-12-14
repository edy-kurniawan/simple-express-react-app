import React, { Component } from "react";
import { TableComponent } from '../components/TableComponent';

export default class IndexMhsContainer extends Component {
  render() {
    return (
      <div>
        <TableComponent data={this.state.data} />
      </div>
    );
  }
}
