import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/App.scss';
import 'assets/style.css';
//import {reactLogo} from 'assets/img/react_logo.svg';
import HeaderToolbar from './header/HeaderToolbar';

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div className="app">
          <HeaderToolbar/>
        </div>
    );
  }
}

export default App;
