const models = require('../models');

const ProjectController = {
  show: (req, res) => {
    models
      .Project
      .findByPk(req.params.id, 
      {
        include: [ 
            {
                model: models.Employee,
                as: 'employees',
                required: false,
                attributes: ['firstName', 'lastName'],
                through: { attributes: [] }
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
      .Project
      .findAll({
        include: [ 
            {
                model: models.Employee,
                as: 'employees',
                required: false,
                attributes: ['firstName', 'lastName'],
                through: { attributes: [] }
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
      .Project
      .create({
            name: body.name
      }, {
        include: [ 
            {
                model: models.Employee,
                as: 'employees',
                required: false,
                attributes: ['firstName', 'lastName'],
                through: { attributes: [] }
            }
        ]
      })
      .then(project => {
        models
        .Project
        .findByPk(project.id, {
          include: [ 
            {
                model: models.Employee,
                as: 'employees',
                required: false,
                attributes: ['firstName', 'lastName'],
                through: { attributes: [] }
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
      .Project
      .update(
          {
              name: body.name
          }, { where: { id: id }})
      .then(updated => {
        if(updated[0] == 0) {
          return res.status(400).send({});
        }
        models
          .Project
          .findByPk(id, {
            include: [ 
                {
                    model: models.Employee,
                    as: 'employees',
                    required: false,
                    attributes: ['firstName', 'lastName'],
                    through: { attributes: [] }
                }
            ]
          })
          .then(data => res.send(data));
      });
  },
  delete: (req, res) => {
    const id = req.params.id;
    models
      .Project
      .destroy({
        where: {
          id: id
        }
      })
      .then(data => {
        return res.status(204).send();
      })
  },
  assignEmployee: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    models
    .Employee
    .findByPk(body.employeeId, {})
    .then(data => {
      if (!data) {
        return res.status(404).send({});
      }
      models
      .Project
      .findByPk(id, {})
      .then(data => {
        if (!data) {
          return res.status(404).send({});
        }
        models
        .ProjectEmployee
        .create({
              employeeId: body.employeeId,
              projectId: id
        }, {
          include: [ 
              {
                  model: models.Employee,
                  as: 'employees',
                  required: false,
                  attributes: ['firstName', 'lastName'],
                  through: { attributes: [] }
              }
          ]
        })
        .then(project => {
          models
          .Project
          .findByPk(project.id, {
            include: [ 
              {
                  model: models.Employee,
                  as: 'employees',
                  required: false,
                  attributes: ['firstName', 'lastName'],
                  through: { attributes: [] }
              }
            ]
          })
          .then(data => res.status(200).send(data));
        });
      })
    })
  }
};
module.exports = ProjectController;
