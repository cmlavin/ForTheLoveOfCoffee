import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Signup from './components/Signup'
import './App.css'

class App extends React.Component {
  renderHomepage = () => {
    return <Homepage />
  }

  renderLogin = () => {
    return <Login login={this.login}/>
  }

  renderSignup = () => {
    return <Signup signup={this.signup}/>
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' render={this.renderHomepage} />
            <Route exact path='/login' render={this.renderLogin} />
            <Route exact path='/signup' render={this.renderSignup} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
