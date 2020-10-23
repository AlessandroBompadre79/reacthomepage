import React, { Component }  from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../routes/main/main.component';
import './App.scss';
import { Provider } from 'react-redux';
import ConfigureStore from '../redux/configureStore';


const store = ConfigureStore();
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
