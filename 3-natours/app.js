const fs = require('fs');
const express = require('express');

const app = express();

// here express.json() is middleware
app.use(express.json());

// app.get('/', (req, res) => {
//   // res.status(200).send('Hello from the server side!');
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('you can post to this endpoint....');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// v1 is version of api
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    results: tours.length,
    status: 'success',
    data: {
      tours,
    },
  });
});

// Here after adding "?" it become optional route.  '/api/v1/tours/:id/:x/:y?'
app.get('/api/v1/tours/:id', (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1; /*Here we change string number(such as '2') to number*/
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }

  res.status(200).json({
    // results: tours.length,
    status: 'success',
    data: {
      tour
    }
  });
});

app.post('/api/v1/tours', (req, res) => {
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
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
