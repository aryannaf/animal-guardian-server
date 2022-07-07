const router = require('express').Router();
const knex = require('knex')(require('../knexfile'));

router.get("/", (req, res) => {
    knex('categories')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving categories: ${err}`)
    );
})


router.get("/:categoryId", (req, res) => {
    knex('categories')
    .join('species', 'categories.id', 'species.category_id')
    .select('categories.id AS category_id', 
        'categories.categoryName', 
        'species.id AS species_id',
        'species.name AS species_name',
        'species.image',
        'species.scientificName',
        'species.category',
        'species.population',
        'species.habitat',
        'species.information',
        'species.source',
        'species.petition',
        'species.donate'
    )
    .where({'category_id': req.params.categoryId})
    .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(400).send(`Error retrieving categories: ${err}`)
      );
})

module.exports = router;