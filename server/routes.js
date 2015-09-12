var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  console.log('incoming request to: ', '/'+route);

  console.log('controllers[route]:');
  console.log(controllers[route]);

  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;
