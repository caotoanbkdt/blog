const Courses = require('../models/Course');
const {multiItem} = require('../../util/mongoose');

class SitesController {
    // [GET] /
    index(req, res, next) {
        Courses.find({}) 
            .then(courses => 
                res.render('home',{courses: multiItem(courses)}))
            .catch(err => next(err))
    }

        // res.render('home');
    // [GET]  /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController;