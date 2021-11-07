const express = require('express');

const service = express();

module.exports = (config) => {
  const log = config.log();
  // Add a request logging middleware in development mode
  if (service.get('env') === 'development') {
    service.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }

  service.put('/add/:name/:quantity', (req, res, next) => {
    var product ={'name':req.params.name,'quantity':Number(req.params.quantity)};
    log.debug(product);
    //var object={name:req.params.name,quantity:req.params.quantity};
    //log.debug(object)
    carMongo.insert(req.params.name,req.params.quantity)
    .then(function(result) {
      log.debug(result);
      res.send(result);
    })
    .catch(function(err) {
      log.debug("Error: " + err);
      res.send(err);
    });
  });

  service.put('/delete/:name/:quantity', (req, res, next) => {
    var product ={'name':req.params.name,'quantity':Number(req.params.quantity)};
    log.debug(product);
    //var object={name:req.params.name,quantity:req.params.quantity};
    //log.debug(object)
    carMongo.insert(req.params.name,req.params.quantity)
    .then(function(result) {
      log.debug(result);
      res.send(result);
    })
    .catch(function(err) {
      log.debug("Error: " + err);
      res.send(err);
    });
  });

  service.get('/list', (req, res, next) => {

    return res.json("hello world");
  });

  service.get('/names', (req, res, next) => {
    return next('Not implemented');
  });

  // eslint-disable-next-line no-unused-vars
  service.use((error, req, res, next) => {
    res.status(error.status || 500);
    // Log out the error to the console
    log.error(error);
    return res.json({
      error: {
        message: error.message,
      },
    });
  });
  return service;
};
