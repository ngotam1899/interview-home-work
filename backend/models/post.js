const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    title: {
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

const Post = mongoose.model('Post', PostSchema)

module.exports = Post