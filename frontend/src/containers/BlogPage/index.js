import React, { Component } from 'react';
import BlogItems from '../BlogItems';
import {connect} from 'react-redux';
import {compose} from 'redux';
// @Actions
import BlogActions from "../../redux/actions/blog";

class BlogPage extends Component {
  componentDidMount(){
    const { onGetListBlog, onGetListUser } = this.props;
    onGetListBlog();
  }

  render() {
    const { listBlog } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <input type="text" className="form-control px-3 mt-4 rounded-pill bg-light w-100" placeholder="Search a post"></input>
            {
              listBlog && listBlog.length>0 && listBlog.map((item, index) => {
                return(
                  <BlogItems blog={item} key={index}/>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    listBlog: state.blog.list,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetListBlog: () => {
      dispatch(BlogActions.onGetList())
    },


  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect
)(BlogPage);