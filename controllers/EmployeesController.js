const models = require('../models');

const EmployeesController = {
  show: (req, res) => {
    models
      .Employee
      .findByPk(req.params.id, 
      {
        include: [ 
          {
            association: 'manager', 
            attributes: ['firstName', 'lastName']
          },
          {
            association: 'equipments'
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
      .Employee
      .findAll({
        include: [ 
          {
            association: 'manager', 
            attributes: ['firstName', 'lastName']
          },
          {
            association: 'equipments'
          }
        ]
      })
      .then(data => {
        if(!data) {
          return res.status(404).send({});
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
          },
          {
            association: 'equipments'
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
            },
            {
              association: 'equipments'
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
              },
              {
                association: 'equipments'
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
  getEquipments: (req, res) => {
    const id = req.params.id;
    models.Equipment.findAll({
      where: { employeeId: id }
    }).then(data => {
      console.log(data);
      if(!data) {
        return res.status(404).send({});
      }
      res.send(data);
    });
  }
};
module.exports = EmployeesController;
