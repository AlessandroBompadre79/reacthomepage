import React, { Component }  from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../routes/main/main.component';
import './App.scss';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
