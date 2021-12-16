/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "nim",
    text: "NIM",
    sort: true,
  },
  {
    dataField: "nama",
    text: "NAMA",
    sort: true,
  },
  {
    dataField: "id_kelas",
    text: "KELAS",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
            
          <Button className="mr-2" color="dark" className="ms-2">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Button>

          <Button className="mr-2" color="dark" className="ms-2">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];

export const TableComponent = (props) => {

  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    getMahasiswa();
  }, []);

  const getMahasiswa = async () => {
    const response = await axios.get('http://127.0.0.1:3030/mahasiswa');
     console.log(response.data);
     console.log('heello');
  }

  return (
    <div className="mt-5">
      <Container>
        <h2>Data Mahasiswa</h2>
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.data}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <div className="float-end mb-1">
                <SearchBar {...props.searchProps} placeholder="Search .." />
              </div>
              <BootstrapTable {...props.baseProps} pagination={ paginationFactory() } />
            </div>
          )}
        </ToolkitProvider>
      </Container>
    </div>
  );
};
