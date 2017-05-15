var express = require('express');

var router = express.Router();
var ctrlEmploye = require('../controllers/employees');


router.get('/employees', ctrlEmploye.employeesList);
router.post('/employees', ctrlEmploye.employeesCreate);
router.get('/employees/:employeesid', ctrlEmploye.employeesReadOne);
router.put('/employees/:employeid', ctrlEmploye.employeesUpdateOne);
router.delete('/employees/:employeid', ctrlEmploye.employeesDeleteOne);


module.exports = router;