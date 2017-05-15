var mongoose = require('mongoose');



var employeShema = new mongoose.Schema({
    firstName: {
        type: String

    },
    lastName: {
        type: String
    },
    salary: {
        type: Number
    },
    birthday: {
        type: String
    },
    active: {
        type: Boolean
    }

});

mongoose.model('Employe', employeShema, 'employees' );