const Post = require('../models/post');

const getAllPost = async (req, res, next) => {
	try {
    var condition = {};
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
    if (req.query.keyword != undefined && req.query.keyword != '') {
			let keyword = req.query.keyword.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			condition.title = {$regex: '.*' + keyword.trim() + '.*', $options: 'i'};
		}
    const total = await Post.countDocuments(condition);
    const post = await Post.find(condition)
    .populate({path: 'user', select: 'name'})
    .limit(limit)
		.skip(limit * page);
		return res.status(200).json({ success: true, code: 200, message: '', total, data: post });
	} catch (error) {
		return next(error);
	}
};

module.exports = {
	getAllPost,
};
