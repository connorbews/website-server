const mongoose = require('mongoose')

const octopusSchema = mongoose.Schema({
    name: String, // Name of the Octopus Type
    lifespan: Number, // Lifespan of Octopus
    mass: Number, // Mass of Octopus
    image: String, // Filepath for firebase
    phylum: String, // Phylum the octopus belongs to
    description: String, // A brief description of the octopus, it usually includes the type of food it eats and where it lives
    order: String // The order the octopus belongs to
})

module.exports = mongoose.model('Octopus', octopusSchema)