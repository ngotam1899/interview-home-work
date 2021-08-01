const Comment = require('../models/comment');

const getAllComment = async (req, res, next) => {
	try {
    let condition = {};
    let limit = 10;
		let page = 0;
		if (req.query.limit != undefined && req.query.limit != '') {
			const number_limit = parseInt(req.query.limit);
			if (number_limit && number_limit > 0) {
				limit = number_limit;
			}
		}
		if (req.query.page != undefined && req.query.page != '') {
			const number_page = parseInt(req.query.page);
			if (number_page && number_page > 0) {
				page = number_page;
			}
    }
    const total = await Comment.countDocuments(condition);
    const comment = await Comment.find(condition)
    .limit(limit)
		.skip(limit * page);
		return res.status(200).json({ success: true, code: 200, message: '', total, data: comment });
	} catch (error) {
		return next(error);
	}
};

const getCommentByPost = async (req, res, next) => {
	try {
    const { IDPost } = req.params;
    let condition = { post: IDPost };
    let limit = 10;
		let page = 0;
		if (req.query.limit != undefined && req.query.limit != '') {
			const number_limit = parseInt(req.query.limit);
			if (number_limit && number_limit > 0) {
				limit = number_limit;
			}
		}
		if (req.query.page != undefined && req.query.page != '') {
			const number_page = parseInt(req.query.page);
			if (number_page && number_page > 0) {
				page = number_page;
			}
    }
    const total = await Comment.countDocuments(condition);
    const comment = await Comment.find(condition)
    .limit(limit)
		.skip(limit * page);
		return res.status(200).json({ success: true, code: 200, message: '', total, data: comment });
  } catch (error) {
		return next(error);
	}
};

module.exports = {
	getAllComment,
  getCommentByPost
};
