import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
// @Actions
import BlogActions from "../../redux/actions/blog";
import UserActions from "../../redux/actions/user";
// @Components
import CommentArea from '../CommentArea';

class BlogDetail extends Component {

  componentDidMount(){
    const { match, onGetBlogDetail, onGetListUser, listUser } = this.props
    onGetBlogDetail(match.params)
    if(!listUser || listUser.length === 0) onGetListUser();
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

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  } 

  render() {
    const { blog, listUser, listComment } = this.props;
    return (
      <div className="container">
        {listUser && listUser.length>0 && <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="rounded border p-4 my-3 shadow">
              <h3>{blog.title}</h3>
              <p className="smaller">Author: <span className="fw-bold">{this.setUserName(blog.userId)}</span></p>
              <p className="smaller">Created date: {this.randomDate(new Date(2012, 0, 1), new Date()).toString()}<span className="fw-bold"></span></p>
              <p className="my-2">{blog.body}</p>
              <button className="rounded-pill border-primary btn bg-light" type="button" onClick={() => this.getComment(blog.id)}>Comments</button>
              {listComment && listComment.length > 0 &&
                <CommentArea comment={listComment}/>
              }
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    blog: state.blog.detail,
    listUser: state.user.list,
    listComment: state.blog.comments,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetBlogDetail: (payload) => {
      dispatch(BlogActions.onGetDetail(payload))
    },
    onGetListUser: () => {
      dispatch(UserActions.onGetList())
    },
    onGetCommentByBlog: (payload) => {
      dispatch(BlogActions.onGetComment(payload))
    },
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect
)(BlogDetail);