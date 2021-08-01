export const BlogActionTypes = {
  GET_LIST: "GET_LIST",
  GET_LIST_SUCCESS: "GET_LIST_SUCCESS",
  GET_LIST_ERROR: "GET_LIST_ERROR",

  GET_COMMENT: "GET_COMMENT",
  GET_COMMENT_SUCCESS: "GET_COMMENT_SUCCESS",
  GET_COMMENT_ERROR: "GET_COMMENT_ERROR",

  GET_DETAIL: "GET_DETAIL",
  GET_DETAIL_SUCCESS: "GET_DETAIL_SUCCESS",
  GET_DETAIL_ERROR: "GET_DETAIL_ERROR",
};

Object.keys(BlogActionTypes).forEach((key) => {
  BlogActionTypes[
    key
  ] = `BLOG_${BlogActionTypes[key]}`;
});

const onGetList = (payload) => ({
  type: BlogActionTypes.GET_LIST,
  payload,
});

const onGetListSuccess = (payload) => ({
  type: BlogActionTypes.GET_LIST_SUCCESS,
  payload,
});

const onGetListError = (error) => ({
  type: BlogActionTypes.GET_LIST_ERROR,
  payload: error,
});

const onGetComment = (payload) => ({
  type: BlogActionTypes.GET_COMMENT,
  payload,
});

const onGetCommentSuccess = (payload) => ({
  type: BlogActionTypes.GET_COMMENT_SUCCESS,
  payload,
});

const onGetCommentError = (error) => ({
  type: BlogActionTypes.GET_COMMENT_ERROR,
  payload: error,
});

const onGetDetail = (payload) => ({
  type: BlogActionTypes.GET_DETAIL,
  payload,
});

const onGetDetailSuccess = (payload) => ({
  type: BlogActionTypes.GET_DETAIL_SUCCESS,
  payload,
});

const onGetDetailError = (error) => ({
  type: BlogActionTypes.GET_DETAIL_ERROR,
  payload: error,
});

const BlogActions = {
  onGetList,
  onGetListSuccess,
  onGetListError,

  onGetComment,
  onGetCommentSuccess,
  onGetCommentError,

  onGetDetail,
  onGetDetailSuccess,
  onGetDetailError,
};

export default BlogActions;
