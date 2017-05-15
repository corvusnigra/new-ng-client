var mongoose = require('mongoose');
var Empl = mongoose.model('Employe');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.employeesList = function (req, res) {
    Empl
        .find({})
        .exec((err, employees)=> {
            if(!employees){

                sendJSONresponse(res, 404, {
                    "message": "Employees not found"
                });
                return;

            } else if(err){

                sendJSONresponse(res, 404, err);
                return;

            }
            else if(employees.length < 1){
                console.log(employees);

                sendJSONresponse(res, 404,{
                    "message": "employees = 0"
                });
                return;
            }

            sendJSONresponse(res, 200, employees);

        })
};


module.exports.employeesCreate = function (req, res) {

    Empl
        .create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            salary: req.body.salary,
            birthday: req.body.birthday,
            active: req.body.active

        }, (err, product) => {

            if(err){
                console.log(err);
                sendJSONresponse(res, 400, err);
            } else {
                console.log(product);
                sendJSONresponse(res, 201, product)
            }

        })

};

module.exports.employeesReadOne = function (req, res) {

    if(req.params && req.params.employeesid) {

        Empl
            .findById(req.params.employeesid)
            .exec((err, product)=> {
                if(!product){

                    sendJSONresponse(res, 404, {
                        "message": "employeid not found"
                    });

                    return;
                } else if(err){
                    sendJSONresponse(res, 404, err);
                    return;
                }

                sendJSONresponse(res, 200, product)

            })

    } else {
        sendJSONresponse(res, 404, {
            "message": "No employe in request"
        })
    }
};

module.exports.employeesUpdateOne = function (req, res) {

    if(req.params && req.params.employeid) {

        Empl
            .findById(req.params.employeid)
            .exec((err, employe)=> {
                if(!employe){

                    sendJSONresponse(res, 404, {
                        "message": "employeid not found"
                    });

                    return;
                } else if(err){
                    sendJSONresponse(res, 404, err);
                    return;
                }

                employe.firstName = req.body.firstName;
                employe.lastName = req.body.lastName;
                employe.salary = req.body.salary;
                employe.birthday = req.body.birthday;
                employe.active = req.body.active;

                employe.save((err, product)=> {
                    if(err){
                        sendJSONresponse(res, 400, err);
                    } else {
                        sendJSONresponse(res, 200, product);
                    }
                });

            })

    } else {
        sendJSONresponse(res, 404, {
            "message": "No employe in request"
        })
    }
};


module.exports.employeesDeleteOne = function (req, res) {

    var employeid = req.params.employeid;

    if(employeid){

        Empl
            .findByIdAndRemove(employeid)
            .exec((err, employe)=> {
                if(err){
                    sendJSONresponse(res, 404, err);
                } else {
                    sendJSONresponse(res, 204, null)
                }
            })

    } else {
        sendJSONresponse(res, 404, {
            "message": "No employeid"
        })
    }
};