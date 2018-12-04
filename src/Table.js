import React, { Component } from 'react';
import './bootstrap.css';
import TableComp from './TableComp.js'

const axios = require("axios");

export default class Table extends Component {
  constructor(props){
    super(props);

    this.state = {
        babies: []
    }
  }

  componentDidMount() {
     {this.populateBabies()}
     console.log(this.state.babies);
  }

  populateBabies = () => {
    var babies = this.state.babies;
    var babiesList = [];
    axios.get("http://"+this.props.ip+"/baby/getBabies").then((response) => {
      babiesList = response.data;
        for(var i = 0; i<response.data.length; i++){
          var baby = {
            babyId:response.data[i].id,
            name:response.data[i].name,
            birthday:response.data[i].birthday,
          };
          babies = babies.concat(baby);
        }
        this.setState({babies: babies})
      });
  }

  render() {
    return (
      <div>
      <label id = "money"/>
      <TableComp ip = {this.props.ip} data = {this.state.babies}/>
      </div>
    )
  }
}
