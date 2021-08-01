import React, { Component } from 'react';
import Header from './containers/Header'
import BlogPage from './containers/BlogPage'

class App extends Component {
  render() {
   return (
     <>
    <Header/>
    <BlogPage/>
    </>
   )
  }
}
export default App;
