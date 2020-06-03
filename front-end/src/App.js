import React , {Component} from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

import Login from './component/Login'
import ERR from './component/ERR'


class App extends Component{
  render(){
    return(
      <Router>
        <Switch> 
          <Route 
            exact path = '/login'
            render = {(routerProps) => <Login {...routerProps} /> } 
          />
          <Route 
            component = {ERR}
          /> 
        </Switch>
      </Router>
    )
  }
}

export default App 