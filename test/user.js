process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../');
let should = chai.should();

chai.use(chaiHttp);

const mockUser = {
  userName: 'test2',
  password: 'bc1M4j2I4u6VaLpUbAB8Y9kTHBs=',
  email: 'test2@test.com',
};

const userToAuthenticate = {
  email: 'test@test.com',
  password: 'bc1M4j2I4u6VaLpUbAB8Y9kTHBs=',
};

describe('Users', () => {
  describe('[unauthenticated] User', () => {
    it('should not list all users', done => {
      chai.request(server)
        .get('/employees')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });

    it('should not list a user', done => {
      chai.request(server)
        .get('/employees/1')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        })
    });

    it('should not create a user', done => {
      chai.request(server)
        .post('/employees')
        .send(mockUser)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    })
  });

  describe('[authenticated] User', () => {
    let token = null;

    beforeEach(done => {
      chai.request(server)
        .post('/login')
        .send(userToAuthenticate)
        .end((err, res) => {
          token = res.body.token;
          console.log(token);
          done();
        });
    });

    it('should list all users', done => {
      chai.request(server)
        .get('/employees')
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          // res.should.have.status(200);
          // res.should.have.property('array');
          res.should.have.status(200);
          // assert(res.body, Array);
          done();
        });
    });

    let createdEmployeeId = null;

    it('should create a new user', done => {
      chai.request(server)
        .post('/employees')
        .send(mockUser)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          createdEmployeeId = res.body.id;
          res.should.have.status(201);
          done();
        })
    });


    it('should list one user', done => {
      chai.request(server)
        .get('/employees/' + createdEmployeeId)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('should update the user', done => {
      chai.request(server)
        .put('/employees/' + createdEmployeeId)
        .send({
          ...mockUser,
          firstName: 'UpdatedName',
          lastName: 'TestUpdate',
        })
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
    });

    it('should delete the user', done => {
      chai.request(server)
        .delete('/employees/' + createdEmployeeId)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
    })
  })
});
