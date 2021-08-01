import React, { Component } from 'react';
import BlogItems from '../BlogItems';
import {connect} from 'react-redux';
import {compose} from 'redux';
import qs from "query-string";
// @Actions
import BlogActions from "../../redux/actions/blog";
import UserActions from "../../redux/actions/user";
// @Functions
import getFilterParams from "../../utils/getFilterParams";

class BlogPage extends Component {
  constructor(props){
    super(props);
    const { location } = props;
    const filter = getFilterParams(location.search);
    this.state = {
      keyword: '',
      filter: {
        title: filter.title
      },
    }
  }

  onChange = (event) =>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    this.setState({
      [name]:  value
    })
  }

  pressKeyWord = (event) => {
    if(event.key === 'Enter') this.search();
  }

  search = () => {
    const { keyword } = this.state;
    this.handleUpdateFilter({ title: keyword });
  }

  // Chuyển router (thêm vào params)
  handleUpdateFilter = (data) => {
    const {location, history} = this.props;
    const {pathname, search} = location;
    let queryParams = getFilterParams(search);
    queryParams = {
      ...queryParams,
      ...data,
    };
    history.push(`${pathname}?${qs.stringify(queryParams)}`);
  };

  componentDidMount(){
    const { onGetListBlog, onGetListUser, location } = this.props;
    const { filter } = this.state;
    const filters = getFilterParams(location.search);
    var params = {
      ...filter,
      ...filters
    };
    onGetListUser();
    onGetListBlog(params);
  }

  componentDidUpdate(prevProps) {
    const { onGetListBlog, location } = this.props
    if (prevProps.location.search !== location.search) {
      const filters = getFilterParams(location.search);
      const { filter } = this.state;
      var params = {
        ...filter,
        ...filters
      };
      onGetListBlog(params);
    }
  }

  render() {
    const { keyword } = this.state;
    const { listBlog, listUser, history } = this.props;
    return (
      <div className="container">
        {listUser && listUser.length>0 && <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <input type="text" className="form-control px-3 mt-4 rounded-pill bg-light w-100" 
            placeholder="Search a post" onChange={this.onChange} name="keyword"
            onKeyPress={this.pressKeyWord} value={keyword}></input>
            {
              listBlog && listBlog.length>0 && listBlog.map((item, index) => {
                return(
                  <BlogItems blog={item} key={index} listUser={listUser} history={history}/>
                )
              })
            }
          </div>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    listBlog: state.blog.list,
    listUser: state.user.list,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetListBlog: (payload) => {
      dispatch(BlogActions.onGetList(payload))
    },
    onGetListUser: () => {
      dispatch(UserActions.onGetList())
    },
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect
)(BlogPage);