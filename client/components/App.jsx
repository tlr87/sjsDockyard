import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Details from './Details'

const App = () => (
  <div className='app-container'>
    <Router>
      <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Details/:id' component={Details}/>
      </div>
    </Router>
  </div>
)

export default App
