var request = require('supertest')
var app = require(__dirname + '/..')

describe('GET /', function () {
  it('should contain text "Welcome to Express"', function (done) {
    request(app)
      .get('/')
      .expect(/Welcome to Express/, done)
  })
})
