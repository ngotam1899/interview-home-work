import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
// @Actions
import BlogActions from "../../redux/actions/blog";
import CommentArea from '../CommentArea';
// @containers


class BlogItems extends Component {
  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  } 

  getComment = (id) => {
    const {onGetCommentByBlog} = this.props;
    onGetCommentByBlog(id);
  }

  render() {
    const { blog, listComment } = this.props;
    return (
      <div className="rounded border p-4 my-3 shadow">
        <h3>{blog.title}</h3>
        <p className="smaller">Author: <span className="fw-bold">{blog.userId}</span></p>
        <p className="smaller">Created date: {this.randomDate(new Date(2012, 0, 1), new Date()).toString()}<span className="fw-bold"></span></p>
        <p className="my-2">{blog.body.substring(0,100)} ...</p>
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