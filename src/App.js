import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import WriteReview from './components/WriteReview'
import Login from './components/Login'
import Signup from './components/Signup'
import ReviewsList from './containers/ReviewsList'
import './App.css'

class App extends React.Component {
  renderHomepage = () => {
    return <Homepage />
  }

  renderWriteReview = () => {
    return <WriteReview />
  }

  renderLogin = () => {
    return <Login login={this.login}/>
  }

  renderSignup = () => {
    return <Signup signup={this.signup}/>
  }

  renderReviews = () => {
    return <ReviewsList />
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' render={this.renderHomepage} />
            <Route exact path='/writereview' render={this.renderWriteReview} />
            <Route exact path='/login' render={this.renderLogin} />
            <Route exact path='/signup' render={this.renderSignup} />
            <Route exact path='/reviews' render={this.renderReviews} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
