import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '@progress/kendo-theme-default/dist/all.css';  



import './style.css'
import Home from './views/home'
import Page from './views/page'


const App = () => {
  return (
    <><Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Page} exact path="/page" />
      </div>
    </Router>
     </>
    
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
