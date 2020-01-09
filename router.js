const express = require('express');
const usersController = require('./controllers/EmployeesController');
const equipmentsController = require('./controllers/EquipmentsController');
const authenticationController = require('./controllers/AuthenticationController');
const authenticationMiddleware = require('./middlewares/authentication');

const router = express.Router();

/* 
  Inregistram middleware-ul pentru a fi inclus in chain doar pe request-urile 
  de pe ruta /users.
  Pentru a-l aplica pe intreaga aplicatie, metoda `.use()` exista si pe instanta de express (`app` din index.js)
*/

router.use('/employees', authenticationMiddleware);

router.get('/employees', usersController.index);
router.post('/employees', usersController.create);
router.get('/employees/:id', usersController.show);
router.put('/employees/:id', usersController.update);
router.delete('/employees/:id', usersController.delete);

//router.get('/employees/:id/equipments', usersController.getEquipments)

//router.use('/equipments', authenticationMiddleware);

router.get('/equipments', equipmentsController.index);


/*

  Middleware-ul de autentificare nu ar trebui sa fie luat in considerare pe ruta /login.
  Nu ar mai fi posibila autentificarea.
*/
router.post('/login', authenticationController.login);

module.exports = router;
