import React, { Component } from 'react';
import './App.css';

const axios = require("axios");

export default class AddPlayerForm extends Component {

  addBaby = () =>{
    var nameLength = document.getElementById("nameLength").value;
    var startInput = document.getElementById("startInput").value;
    axios.get("http://"+this.props.ip+"/baby/createBaby/"+nameLength+"/"+startInput).then((res) => {
       console.log(res.data);
    });
  }


  render() {
    return (
      <form id = "addBabyForm">
        <label>Add Player: </label>
        <input id = "nameLength" type = "number" placeholder = "Enter Name Length"/>
        <input id = "startInput" placeholder = "Enter start of name"/>
        <button id = "addBabyBtn" onClick = {() => this.addBaby()}>Submit</button>
      </form>
    )
  }
}
