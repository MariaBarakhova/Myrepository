import React, {Component} from 'react';
import logo from './logo.svg';
import styles from'./App.css';

import Header from './components/header';
const menu = [
  {
    title:'About',
  },
  {
    title:'Portfolio',
  },
]

// export default (props) => {
//     return(
//     <div> 
//       <Header menuList={menu}/>
//       <h1>Home page</h1>
//     </div>
//   )
// }

export default class App extends Component {
constructor(props){
  super(props);
this.state = {
isOpen: false,
isHeaderClass: false,
};

}

toggleDropdown = () => {
this.setState({
  isHeaderClass: !this.state.isHeaderClass,
  isOpen: !this.state.isOpen,
});
}
  render() {
    console.log('THIS', this);
    console.log(this.state.isOpen);
    return (
      <div className="App">
        <header className={`App-header ${this.state.isHeaderClass ? 'red' : '' }`}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggleDropdown}>
          toggle dropdown
          </button>
          {
            this.state.isOpen &&
          <div>
            this is content dropdown
          </div>
        }
      </div>
    );
  }
}

//export default App;
