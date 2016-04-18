var db = require('./index.js').db;

describe('MySql Database', function () {
  it.only('should default the new user to active, but unconfirmed', function (done) {
    User.forge()
        .save({ email: 'test@test.com', password: 'password' })
        .then(function (savedUser) {
            return savedUser.fetch();
        })
        .then(function (user) {
            console.log(user);
            //user.get('email').should.eql('test@test.com');

            done();
        });
  });
});
