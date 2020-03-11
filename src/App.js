import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
//import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: "Bamboo", age: 17, type: "cute" },
      { id: 2, name: "Fond", age: 16, type: "stun" },
      { id: 3, name: "Khamin", age: 20, type: "cool" },
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    console.log(id);
    let ninjas = this.state.ninjas.filter(n => {
      return n.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount() {
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My app jaaaaaaaa</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
