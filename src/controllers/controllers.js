const Teachers = require('../models/teachers');
const Entries = require('../models/entries');

//Home
exports.home = (req, res) => {
    try{
		res.send('API made by Jesus Ponce');
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

//Show all teachers
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

//Add new entry
exports.addEntry = async (req, res, next) => {

    const event = new Date();
    let h = event.getHours();
    let m = event.getMinutes();
    let s = event.getSeconds();
    let day = event.getDate();
    let month = event.getMonth() + 1;
    const year = event.getFullYear();
    const hour = h + ':' + m + ':' + s;
        if(h < 10) {
            h = '0' + h
        }
        if(m < 10) {
            m = '0' + m
        }
        if(s < 10) {
            s = '0' + s 
        }
    
    const entries = new Entries({
        day,
        month,
        year,
        hour
    });
    try {
        await entries.save();
        res.json({msg : 'entry registered'});
    } catch (e) {
        console.log(e);
		res.status(500).json({
			message: 'internal server error :('
    	});
    }
}

//Show all entriess
exports.showEntries = async(req, res) => {
    try {
        const entries = await Entries.find({}).populate('teacher');
        res.json(entries)
    } catch (e) {
        console.log(e);
		res.status(500).json({
			message: 'internal server error :('
		});   
    }
}