const router = require('express').Router();

const { getBurgers, createBurger, updateBurger, deleteBurger } = require('../../controllers/burgers_controller');

// create full CRUD routes at `/burgers` (it will eventually become '/api/burgers')
router.get('/burgers', (req, res) => {
  getBurgers()
    .then(burgerdata => {
      res.status(200).json(burgerdata);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/burgers', (req, res) => {
  createBurger(req.body)
    .then(burgerdata => {
      res.status(200).json(burgerdata);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/burgers/:id', (req, res) => {
  updateBurger(req.body, req.params.id)
    .then(burgerdata => {
      if (burgerdata.code === 404) {
        return res.status(404).json(burgerdata);
      }
      res.status(200).json(burgerdata);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete('/burgers/:id', (req, res) => {
  deleteBurger(req.params.id)
    .then(burgerdata => {
      if (burgerdata.code === 404) {
        return res.status(404).json(burgerdata);
      }

      res.status(200).json(burgerdata);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;