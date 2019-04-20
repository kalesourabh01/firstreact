import React, { Component } from 'react';

class FormExample extends Component {

  constructor(){
    super();
    this.state={
      fname:"",
      lname:""
    }
  }

  handleclick =(event)=>{
    alert(this.state.fname);
  }

  handleChange =(event)=>{
    this.setState({fname: event.target.value});
  }

   render(){
    return (
      <div>
        <form onSubmit={this.handleclick}>
      <label> First name</label>
      <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange}/>
      <input type="submit" value="Submit" name="submit" />
        </form>
          

      </div>
    );
  }
}

  export default FormExample;