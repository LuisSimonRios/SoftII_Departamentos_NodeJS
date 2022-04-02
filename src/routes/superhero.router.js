const express = require('express');
const routes = express.Router();
const superheroSchema = require('../models/superheroe.model');
const Service = require('../services/superhero.service')
const hero_service = new Service()

routes.get('/', (req, res) => {
  res.json("hoola");
});

/*http://localhost:5000/api/v1/superheros/superhero */
routes.post('/superhero', async(req,res) =>{
  console.log("HOLA")
  try {

    const new_superhero = superheroSchema(req.body)

    const data = await hero_service.createHero(new_superhero)
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
})

/*http://localhost:5000/api/v1/superheros/superhero */
routes.put('/superhero/:id', async(req,res) =>{
  console.log("PUT")
  try {
    const id = req.params.id
    const data = await hero_service.editHero(id, req.body)
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
})

module.exports = routes;
