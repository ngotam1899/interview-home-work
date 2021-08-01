import React, { Component } from 'react';
import Header from './containers/Header'
import BlogPage from './containers/BlogPage'
import BlogDetail from './containers/BlogDetail'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
   return (<>
    <Header/>
    <BrowserRouter>
    
    <Switch>
      <Route path="/blogs" name="Blog Page" component={({ history, location }) => <BlogPage history={history} location={location}/>} exact/>
      <Route path="/blogs/:blogId" name="Trang đăng ký" component={({ match }) => <BlogDetail match={match}/>} exact/>
      <Redirect to="/blogs" />
    </Switch>
    </BrowserRouter>
    </>
   )
  }
}
export default App;
