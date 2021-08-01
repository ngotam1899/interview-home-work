const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    body: {
      type: String,
    }
  },
  {
    timestamps: true
  }
)

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment