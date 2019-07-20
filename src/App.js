import React from 'react'
import Routes from './Routes';
import {Link,BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store';

const App = ()=>{


  return(
    <Provider store={store}>
      <Router>
        <Link to="/" >To main page!</Link>
        
        <Link to="/provider/">Are you a provider?</Link>

        <Routes/>
      </Router>
    </Provider>
  )
}


export default App