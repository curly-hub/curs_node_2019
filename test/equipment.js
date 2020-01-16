process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

const userToAuthenticate = {
  email: 'Thomas.Roberts@test.com',
  password: 'A',
};

mockEquipment = {
    name: 'test',
    serial: 'AAAAAAAAAAAAAAAAAAAAAA',
    type: 'test',
    model: 'test',
    employeeId: null,
    createdAt: '2019-11-09 01:02:43.115 +00:00',
    updatedAt: '2019-11-09 01:02:43.115 +00:00'
}

describe('Equipments', () => {
  describe('[unauthenticated] User - Equipments', () => {
    it('should not list all users', done => {
      chai.request(server)
        .get('/equipments')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });

    it('should not list a employee', done => {
      chai.request(server)
        .get('/equipments/1')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        })
    });

    it('should not create a employee', done => {
      chai.request(server)
        .post('/equipments')
        .send(mockEmployee)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    })

    it('should not create a employee', done => {
      chai.request(server)
        .post('/equipments')
        .send(mockEmployee)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    })

  });

  describe('[authenticated] User - Equipments', () => {
    let token = null;

    beforeEach(done => {
      chai.request(server)
        .post('/login')
        .send(userToAuthenticate)
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });

    it('should list all equipments', done => {
      chai.request(server)
        .get('/equipments')
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          let count = res.body.length
          expect(count, 'expect count of all equipments to be 106').to.equal(106);
          done();
        });
    });

    let createdEquipmentId = null;

    it('should create a new equipment', done => {
      chai.request(server)
        .post('/equipments')
        .send(mockEquipment)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
            createdEquipmentId = res.body.id;
          res.should.have.status(201);
          done();
        })
    });

    it('should list one equipment', done => {
      chai.request(server)
        .get('/equipments/' + createdEquipmentId)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.name, 'expect last name to be').to.equal(mockEquipment.name);
          done();
        });
    });

    it('should update the equipment', done => {
      chai.request(server)
        .put('/equipments/' + createdEquipmentId)
        .send({
            name: 'UpdatedName'
        })
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          expect(res.body.name, 'expect last name to be').to.equal('UpdatedName');
          res.should.have.status(200);
          done();
        })
    });

    it('should assign the equipment', done => {
        chai.request(server)
          .put('/equipments/'+createdEquipmentId+'/assign')
          .send({
              employeeId: 1
          })
          .set({ Authorization: 'Bearer ' + token })
          .end((err, res) => {
            expect(res.body.employeeId, 'expect employeeId to be').to.equal(1);
            res.should.have.status(200);
            done();
          })
      });

    it('should delete the equipment', done => {
      chai.request(server)
        .delete('/equipments/' + createdEquipmentId)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });
});
