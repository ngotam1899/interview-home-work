const User = require('../models/user');

const getAllUser = async (req, res, next) => {
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
    const total = await User.countDocuments(condition);
    const user = await User.find(condition)
    .limit(limit)
		.skip(limit * page);
		return res.status(200).json({ success: true, code: 200, message: '', total, data: user });
	} catch (error) {
		return next(error);
	}
};

module.exports = {
	getAllUser,
};
