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
exports.addTeacher = async(req, res) => {
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

exports.showTeachers = async(req, res) => {
    try {
        const teachers = await Teachers.find({});
        res.json(teachers)
    } catch (e) {
        console.log(e);
		res.status(500).json({
			message: 'internal server error :('
		});
    }
}