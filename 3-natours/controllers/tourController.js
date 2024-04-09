const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);

  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  next();
};

// 2) Route Handlers
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requesteAt: req.requestTime,
    result: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);
  const id =
    req.params.id * 1; /*Here we change string number(such as '2') to number*/
  const tour = tours.find((el) => el.id === id);

  // URL id checker
  // if (!tour) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid ID',
  //   });
  // }

  res.status(200).json({
    // results: tours.length,
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  // body is the property that is gonna be available on the request because we used that middleware.
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;

  // object.assign- which basically allows us to create a new object by merging two existing objects together.
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.updatetour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here....>',
    },
  });
};

exports.deleteTour = (req, res) => {
  // 204 mean no content
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
