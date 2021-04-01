const Courses = require('../models/Course');
const {onlyItem} = require('../../util/mongoose');

class CourseController {
    async show(req, res, next) {
        try {
             const course =  await Courses.findOne({slug: req.params.slug});
             res.render('courses/show',{course: onlyItem(course)})
        } catch (error) {
            
        }
            // .then(course => res.render('courses/show',{course: onlyItem(course)}))
            // .catch(next)
    }
}

module.exports = new CourseController;