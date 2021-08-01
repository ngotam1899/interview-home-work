import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src="https://zigvy.com/wp-content/uploads/2017/12/zigvy-logo.svg" alt=""></img>
          </a>
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" className="nav-link text-secondary">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <img className="rounded-circle d-block avatar mx-auto mb-1" src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/146492544_1631310003724409_7357512455764589650_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UD5_aAmazj4AX9jHnKY&_nc_ht=scontent-xsp1-3.xx&oh=93378de8690af0f3379660602f65ef2d&oe=612AA6BF"></img>
                Ngô Tâm
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
    );
  }
}

export default Header;