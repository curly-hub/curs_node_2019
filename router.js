const express = require('express');
const EmployeesController = require('./controllers/EmployeesController');
const equipmentsController = require('./controllers/EquipmentsController');
const projectController = require('./controllers/ProjectController');
const authenticationController = require('./controllers/AuthenticationController');
const authenticationMiddleware = require('./middlewares/authentication');

const router = express.Router();

/* 
  Inregistram middleware-ul pentru a fi inclus in chain doar pe request-urile 
  de pe ruta /users.
  Pentru a-l aplica pe intreaga aplicatie, metoda `.use()` exista si pe instanta de express (`app` din index.js)
*/

router.use('/employees', authenticationMiddleware);

router.get('/employees',                EmployeesController.index);
router.post('/employees',               EmployeesController.create);
router.get('/employees/:id',            EmployeesController.show);
router.put('/employees/:id',            EmployeesController.update);
router.delete('/employees/:id',         EmployeesController.delete);
router.get('/employees/:id/equipments', EmployeesController.getEquipments)

router.use('/equipments', authenticationMiddleware);

router.get('/equipments',               equipmentsController.index);
router.get('/equipments/:id',           equipmentsController.show);
router.post('/equipments',              equipmentsController.create);
router.put('/equipments/:id',           equipmentsController.update);
router.put('/equipments/:id/assign',    equipmentsController.assign);
router.delete('/equipments/:id',        equipmentsController.delete);

router.use('/projects', authenticationMiddleware);
router.get('/projects',                 projectController.index);
router.get('/projects/:id',             projectController.show);
router.post('/projects',                projectController.create);
router.put('/projects/:id',             projectController.update);
router.put('/projects/:id/assign',      projectController.assignEmployee);
router.delete('/projects/:id',          projectController.delete);
/*
  Middleware-ul de autentificare nu ar trebui sa fie luat in considerare pe ruta /login.
  Nu ar mai fi posibila autentificarea.
*/
router.post('/login', authenticationController.login);

module.exports = router;
