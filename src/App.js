import React, { Component } from 'react';
import Ninjas from './Ninjas';
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
      { id:1, name:"Bamboo", age:17, type:"cute" },
      { id:2, name:"Fond", age:16, type:"stun" },
      { id:3, name:"Khamin", age:20, type:"cool" },
    ]
  }
  render(){
  return (
    <div className="App">
     <h1>My app jaaaaaaaa</h1>
     <Ninjas ninjas={this.state.ninjas} />
    </div>
  );
  }
}

export default App;
