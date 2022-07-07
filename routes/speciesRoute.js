const router = require('express').Router();
const knex = require('knex')(require('../knexfile'));

router.get("/", (req, res) => {
    knex('species')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving species: ${err}`)
    );
})

router.get("/:speciesId", (req, res) => {
    knex('species')
    .where({id: req.params.speciesId})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving species: ${err}`)
    );
})


module.exports = router;