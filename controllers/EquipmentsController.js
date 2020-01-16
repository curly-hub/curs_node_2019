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
      .Equipment
      .create({
        name: body.name,
        model: body.model,
        serial: body.serial,
        type: body.type,
      })
      .then(equipment => {
        models
        .Equipment
        .findByPk(equipment.id, {
        })
        .then(data => res.status(201).send(data));
      });
  },
  update: (req, res) => {
    const body = req.body;
    const id = req.params.id;
    models
      .Equipment
      .update(
        {name: body.name,
        model: body.model,
        serial: body.serial,
        type: body.type}, { where: { id: id }})
      .then(updated => {
        if(updated[0] == 0) {
          return res.status(400).send({});
        } else {
        models
          .Equipment
          .findByPk(id, {
          })
          .then(data => res.send(data));
        }
      });
  },
  delete: (req, res) => {
    const id = req.params.id;
    models
      .Equipment
      .destroy({
        where: {
          id: id
        }
      })
      .then(data => {
        return res.status(204).send();
      })
  },
  assign: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    models.Equipment.update({employeeId: body.employeeId}, { where: { id: id }}).then(updated => {
      if(updated[0] == 0) {
        return res.status(400).send({});
      } else {
      models
        .Equipment
        .findByPk(id, {
        })
        .then(data => res.send(data));
      }
    });
  }
};

module.exports = EquipmentsController;
