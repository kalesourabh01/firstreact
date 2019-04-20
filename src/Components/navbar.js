import React, { Component } from 'react';

class Navbar extends Component {
    
    constructor(){
        super()
        this.state = {
            message : 'Hello World'
        }
    }

    changeMessage(){

        this.setState({
            message : 'Hello People'
        })
    }
    
    render() {
       return (
        <div>
        <h1> Navbar   {this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Change</button>
        </div>
        );
    }


  }

  export default Navbar;