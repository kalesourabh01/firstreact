import React, { Component } from 'react';

class FormExample extends Component {

  constructor(){
    super();
    this.state={
      fname:"",
      lname:"",
      contact:"",
      city:""
    }
  }

  handleclick =(event)=>{
    alert(this.state.fname);
  }

  handleChange =(event)=>{
    this.setState({fname: event.target.value});
    console.log(event.target.value);
  }

   render(){
    return (
      <div>
        <form onSubmit={this.handleclick}>
      <label> First name</label>
      <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange}/> <br/>
      <label> last name</label>
      <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange}/><br/>
      <label> Contact</label>
      <input type="text" name="contact" value={this.state.contact} onChange={this.handleChange}/><br/>
      <label> City</label>
      <input type="text" name="city" value={this.state.city} onChange={this.handleChange}/><br/>
      {/* <input type="submit" value="Submit" name="submit" /> */}
        </form>
          

      </div>
    );
  }
}

  export default FormExample;