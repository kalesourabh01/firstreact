import React, { Component } from 'react';
import axios from 'axios';
class FetchData extends Component {

  constructor(){
    super();
    this.state={
      posts:[],
      ermsg:""
      
    }
  }

//   handleclick =(event)=>{
//     alert(this.state.fname);
//   }

//   handleChange =(event)=>{
//     this.setState({fname: event.target.value});
//     console.log(event.target.value);
//   }

componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
      .catch((error) => {
          this.setState({ermsg:"data not found"});
         
      });
      

}

   render(){
    return (
        
      <div>
           { this.state.ermsg}

        <ul>
        { this.state.posts.map(posts => <li>{posts.title}</li>)}
      </ul>
      </div>
    );
  }
}

  export default FetchData;