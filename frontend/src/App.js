import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Product from './pages/admin/product'

class App extends Component {
home() {
  return <h1>Home</h1>;
}

  render() {
    return (
      <Router>
        <Route path = "/" exact component = {Product}/>
      </Router>
    );
  }
}
export default App;
