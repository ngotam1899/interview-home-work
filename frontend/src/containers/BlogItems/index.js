import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
// @Actions
import BlogActions from "../../redux/actions/blog";
// @Components
import CommentArea from '../CommentArea';

class BlogItems extends Component {
  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  } 

  getComment = (id) => {
    const { onGetCommentByBlog } = this.props;
    onGetCommentByBlog(id);
  }

  setUserName = (id) => {
    const { listUser } = this.props;
    const user = listUser.find(obj => obj.id === id);
    return user.name;
  }

  redirect = (id) =>{
    const { history } = this.props;
    history.push(`/blogs/${id}`)
  }

  render() {
    const { blog, listComment } = this.props;
    return (
      <div className="rounded border p-4 my-3 shadow">
        <h3>{blog.title}</h3>
        <p className="smaller">Author: <span className="fw-bold">{this.setUserName(blog.userId)}</span></p>
        <p className="smaller">Created date: {this.randomDate(new Date(2012, 0, 1), new Date()).toString()}<span className="fw-bold"></span></p>
        <p className="my-2">{blog.body.substring(0,100)} ... <span><button type="button" className="btn bg-light border-primary"
        onClick={()=> this.redirect(blog.id)}>Xem thêm</button></span></p>
        <button className="rounded-pill border-primary btn bg-light" type="button" onClick={() => this.getComment(blog.id)}>Comments</button>
        {listComment && listComment.length > 0 && listComment[0].postId === blog.id && 
          <CommentArea comment={listComment}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    listComment: state.blog.comments,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetCommentByBlog: (payload) => {
      dispatch(BlogActions.onGetComment(payload))
    },
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect
)(BlogItems);