const Tour = require('./../models/tourModel');

/*const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);*/

// 2) Route Handlers
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    // Tour.findOne({_id: req.params.id})

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
  // const tour = tours.find(el => el.id === id);
  // URL id checker
  // if (!tour) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid ID',
  //   });
  // }
};

exports.createTour = async (req, res) => {
  // body is the property that is gonna be available on the request because we used that middleware.
  // console.log(req.body);

  // const newTour = new Tour({});
  // newTour.save();

  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent'
    });
  }
};

exports.updatetour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here....>'
    }
  });
};

exports.deleteTour = (req, res) => {
  // 204 mean no content
  res.status(204).json({
    status: 'success',
    data: null
  });
};
