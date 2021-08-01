import React, { Component } from 'react';

class CommentArea extends Component {
  render() {
    const {comment} = this.props;
    return (
      <div>
        <p className="text-secondary">{comment.length} replies</p>
        <p className="border-bottom"></p>
        {
          comment.map((item, index) => {
            return(
              <div className="row my-2" key={index}>
                <div className="col-2">
                  <img className="w-100 rounded-circle" src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/146492544_1631310003724409_7357512455764589650_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UD5_aAmazj4AX9jHnKY&_nc_ht=scontent-xsp1-3.xx&oh=93378de8690af0f3379660602f65ef2d&oe=612AA6BF" alt=""></img>
                </div>
                <div className="col-10">
                  <p className="text-secondary smaller">{item.email}</p>
                  <p>{item.body.substring(0,50)} ...</p>
                  <p className="text-secondary smaller">Reply to</p>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default CommentArea;