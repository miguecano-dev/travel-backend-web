const express = require('express');
const router = express.Router();
const Places = require('../models/City')
const User = require('../models/User')

/* GET home page. */
router.get('/', (req, res) => {
  res.json({
    message: 'Hello from the backend!'
  })
})

router.get("/allPlaces", (req, res) => {
  Places.find().then(() => {
    console.log();
    res.json({  });
  });
});

router.get("/singlePlace", (req, res) => {
  Places.findById().then(() => {
    res.json({  });
  });
});

router.post("/favoritePlace", (req, res) => { //favorite places
    if (err) {
      res.status(403).json(err);
    } else {
      User.findByIdAndUpdate().then(() => {
          res.status(200).json();
        })
        .catch((err) => res.status(500).json(err));
    }
});

router.get("/userPlaces", (req, res) => { // places saved in their profile
    if (err) {
      res.status(403).json(err);
    } else {
      Places.find().then(() => {
        res.json({  })
      })
    }
});

module.exports = router;
