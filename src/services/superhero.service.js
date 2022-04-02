const { response } = require('express');
const superheroSchema = require('../models/superheroe.model');
class Service {
  async createHero (superheroe){
    console.log("")
    superheroe.save()
    return superheroe
  }
  async listHero () {}
  async showHero (){}

  async editHero (hero_id, hero){
    console.log(hero)
    const { superhero, realname } = hero;
    return superheroSchema.updateOne({_id: hero_id},{$set:{superhero,realname}}).then((data) => {}).catch((error) => {})
  }

  async deleteHero (hero){}
}

module.exports = Service
