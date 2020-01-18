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


mockEmployee = {
  firstName: 'test',
  lastName:'last_test',
  department: 'test',
  hireDate: '2019-11-09 01:02:43.115 +00:00',
  position: 'pro',
  location: 'Buc',
  managerId: null,
  createdAt: '2019-11-09 01:02:43.115 +00:00',
  updatedAt: '2019-11-09 01:02:43.115 +00:00'
}

describe('Employees', () => {
  describe('[unauthenticated] User - Employees', () => {
    it('should not list all employees', done => {
      chai.request(server)
        .get('/employees')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });

    it('should not list a employee', done => {
      chai.request(server)
        .get('/employees/1')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        })
    });

    it('should not create a employee', done => {
      chai.request(server)
        .post('/employees')
        .send(mockEmployee)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    })

    it('should not create a employee', done => {
      chai.request(server)
        .post('/employees')
        .send(mockEmployee)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    })

  });

  describe('[authenticated] User - Employees', () => {
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

    it('should list all employee', done => {
      chai.request(server)
        .get('/employees')
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          let count = res.body.length
          expect(count, 'expect count of all employee to be 20').to.equal(20);
          done();
        });
    });

    let createdEmployeeId = null;

    it('should create a new employee', done => {
      chai.request(server)
        .post('/employees')
        .send(mockEmployee)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          createdEmployeeId = res.body.id;
          res.should.have.status(201);
          done();
        })
    });


    it('should list one employee', done => {
      chai.request(server)
        .get('/employees/' + createdEmployeeId)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.lastName, 'expect last name to be').to.equal(mockEmployee.lastName);
          done();
        });
    });

    it('should update the employee', done => {
      chai.request(server)
        .put('/employees/' + createdEmployeeId)
        .send({
          firstName: 'UpdatedName',
          lastName: 'TestUpdate',
        })
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          expect(res.body.lastName, 'expect last name to be').to.equal('TestUpdate');
          res.should.have.status(200);
          done();
        })
    });

    it('should delete the employee', done => {
      chai.request(server)
        .delete('/employees/' + createdEmployeeId)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(204);
          done();
        })
    })
  });
});
