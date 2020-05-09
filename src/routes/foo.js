const express = require('express');
const { FooController } = require('../controllers/foo');

const router = express.Router();

router
  .route('/')
  .get(FooController.list)
  .post(FooController.create);

router
  .route('/:id')
  .get(FooController.findOne)
  .put(FooController.update)
  .delete(FooController.delete);

module.exports = router;
