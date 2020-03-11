import React, { Component } from 'react'
import Ninjas from './Ninjas'

class AddNinJa extends Component {
  state = {
    name: null,
    age: null,
    type: null
  }
  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
  }  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="Text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">Age: </label>
          <input type="Number" id="age" onChange={this.handleChange} />
          <label htmlFor="type">Type: </label>
          <input type="Text" id="type" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddNinJa