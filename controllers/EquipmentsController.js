const models = require('../models');

const EquipmentsController = {
  show: (req, res) => {
    models
      .Equipment
      .findByPk(req.params.id, 
      {
        include: [ 
          {
            association: 'Employee'
          }
        ]
      })
      .then(data => {
        if (!data) {
          return res.status(404).send({});
        }
        return res.send(data);
      })
  },
  index: (req, res) => {
    models
      .Equipment
      .findAll({
        include: [ 
          {
            association: 'Employee'
          }
        ]
      })
      .then(data => {
        if(!data) {
            res.send(data);
        }
        res.send(data);
      });

  },
  create: (req, res) => {
    const date = new Date();
    const sqllite_date = date.toISOString();
    const body = req.body;
    models
      .Employee
      .create({
        firstName: body.firstName,
        lastName: body.lastName,
        department: body.department,
        email: body.email,
        hireDate: body.hireDate,
        position: body.position,
        location: body.location,
        managerId: body.managerId
      }, {
        include: [ 
          {
            association: 'manager', 
            attributes: ['firstName', 'lastName']
          }
        ]
      })
      .then(employee => {
        models
        .Employee
        .findByPk(employee.id, {
          include: [ 
            {
              association: 'manager', 
              attributes: ['firstName', 'lastName']
            }
          ]
        })
        .then(data => res.status(201).send(data));
      });
  },
  update: (req, res) => {
    const body = req.body;
    const id = req.params.id;
    models
      .Employee
      .update(body, { where: { id: id }})
      .then(updated => {
        models
          .Employee
          .findByPk(id, {
            include: [ 
              {
                association: 'manager', 
                attributes: ['firstName', 'lastName']
              }
            ]
          })
          .then(data => res.send(data));
      });
  },
  delete: (req, res) => {
    const id = req.params.id;
    models
      .Employee
      .destroy({
        where: {
          id: id
        }
      })
      .then(data => {
        return res.status(204).send();
      })
  },
};

module.exports = EquipmentsController;
