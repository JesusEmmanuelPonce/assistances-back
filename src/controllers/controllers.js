const Teachers = require('../models/teachers');

//Home
exports.home = (req, res) => {
    try{
		res.send('API make by Jesus Ponce');
	}catch (e) {
		console.log(e);
		res.status(500).json({
			message: 'Error en el servidor'
		});
	}
}