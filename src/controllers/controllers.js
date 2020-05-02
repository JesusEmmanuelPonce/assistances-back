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

//Add teacher
exports.addTeacher = async(req, res, next) => {
    const teachers = new Teachers(req.body);
    try {
        await teachers.save();
        res.json({
			msg: 'Teacher added'
		});
    } catch (e) {
        console.log(e);
		res.status(500).json({
			message: 'internal server error :('
		});
    }
}