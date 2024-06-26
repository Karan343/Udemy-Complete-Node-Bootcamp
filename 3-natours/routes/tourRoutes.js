const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router(); /* express.Router return a middleware*/

// router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updatetour)
  .delete(tourController.deleteTour);

module.exports = router;
