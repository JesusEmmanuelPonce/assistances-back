const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

module.exports = function(){

    router.get('/', controllers.home);

    //Add teacher
    router.post('/teachers', controllers.addTeacher);

    //Show teacher
    router.get('/teachers', controllers.showTeachers);

    //Delete teacher
    router.delete('/teachers/:id', controllers.deleteTeachers);

    //Add entries
    router.post('/entries', controllers.addEntry);

    //Mostrar entries
    router.get('/entries', controllers.showEntries);

    return router;
}
