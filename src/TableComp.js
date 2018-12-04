import React, { Component } from 'react';
import './App.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import AddBabyForm from './AddBabyForm.js'

const axios = require("axios");

export default class TableComp extends Component {
  deleteBaby = (rowNum) =>{
    axios.delete("http://localhost:8081/baby/deleteBaby/"+rowNum).then((response) =>{
      console.log(response.data);
      window.location.reload();
    });
  }

  cellButton = (cell, row) => {
      return(
        <button className = "btn btn-outline-danger" onClick = {() => this.deleteBaby(row.babyId)}>Delete</button>
      )
  }

  render() {
    return (
      <div>
      <AddBabyForm ip = {this.props.ip} className = "playerForm"/>
      <BootstrapTable data ={this.props.data} className="table table-striped" search>
        <TableHeaderColumn dataField = 'babyId' isKey>Id</TableHeaderColumn>
        <TableHeaderColumn dataField = 'name' >Name</TableHeaderColumn>
        <TableHeaderColumn dataField = 'birthday'>Birthday</TableHeaderColumn>
        <TableHeaderColumn dataField = 'buttons' dataFormat = {this.cellButton}>Options</TableHeaderColumn>
      </BootstrapTable>
      </div>
    )
  }
}
