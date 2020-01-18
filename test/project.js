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

mockProject = {
    name: 'test'
}

describe('Project', () => {
  describe('[unauthenticated] User - Project', () => {
    it('should not list all projects', done => {
      chai.request(server)
        .get('/projects')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });

    it('should not list a project', done => {
      chai.request(server)
        .get('/projects/1')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        })
    });

    it('should not create a project', done => {
      chai.request(server)
        .post('/projects')
        .send(mockProject)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    })

    it('should not create a project', done => {
      chai.request(server)
        .post('/projects')
        .send(mockEmployee)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    })

  });

  describe('[authenticated] User - Projects', () => {
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

    let createdProjectId = null;

    it('should create a new project', done => {
      chai.request(server)
        .post('/projects')
        .send(mockProject)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
            createdProjectId = res.body.id;
            res.should.have.status(201);
            done();
        })
    });

    it('should list all projects', done => {
      chai.request(server)
        .get('/projects')
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          let count = res.body.length
          expect(count, 'expect count of all projects to be 1').to.equal(1);
          done();
        });
    });



    it('should list one project', done => {
      chai.request(server)
        .get('/projects/' + createdProjectId)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.name, 'expect last name to be').to.equal(mockEquipment.name);
          done();
        });
    });

    it('should update the project', done => {
      chai.request(server)
        .put('/projects/' + createdProjectId)
        .send({
            name: 'UpdatedName'
        })
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          expect(res.body.name, 'expect name to be').to.equal('UpdatedName');
          res.should.have.status(200);
          done();
        })
    });

    it('should assign the project', done => {
        chai.request(server)
          .put('/projects/'+createdProjectId+'/assign')
          .send({
              employeeId: 1
          })
          .set({ Authorization: 'Bearer ' + token })
          .end((err, res) => {
            expect(res.body.employees.length, 'expect employeeId to be').to.equal(1);
            res.should.have.status(200);
            done();
          })
      });

    it('should delete the project', done => {
      chai.request(server)
        .delete('/projects/' + createdProjectId)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });
});
