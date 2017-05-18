var express = require('express');

var router = express.Router();
var ctrlEmploye = require('../controllers/employees');
var ctrlAuth = require('../controllers/authentication')


router.get('/employees', ctrlEmploye.employeesList);
router.post('/employees', ctrlEmploye.employeesCreate);
router.get('/employees/:employeesid', ctrlEmploye.employeesReadOne);
router.put('/employees/:employeid', ctrlEmploye.employeesUpdateOne);
router.delete('/employees/:employeid', ctrlEmploye.employeesDeleteOne);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;