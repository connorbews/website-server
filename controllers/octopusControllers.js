const asyncHandler = require('express-async-handler')

const Octopus = require('../model/octopusModel')


// @desc   Get Octopus
// @route  GET /api/goals
// @access Private
const getOctopus = asyncHandler(async (req, res) => {
    const octopuss = await Octopus.find()

    res.status(200).json(octopuss)
})

// @desc   Set Octopus
// @route  POST /api/goals
// @access Private
const postOctopus = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const octopuss = await Octopus.create({
        name: req.body.name,
        lifespan: req.body.lifespan,
        mass: req.body.mass,
        image: req.body.image,
        phylum: req.body.phylum,
        description: req.body.description,
        order: req.body.order
    })

    res.status(200).json(octopuss)
})

// @desc   Update Octopus
// @route  PUT /api/goals
// @access Private
const updateOctopus = asyncHandler(async (req, res) => {
    const octopus = await Octopus.findById(req.params.id)

    if (!octopus) {
        res.status(400)
        throw new Error('octopus not found')
    }

    const updatedOctopus = await Octopus.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    res.status(200).json(updatedOctopus)
})

// @desc   Delete Octopus
// @route  DELETE /api/goals
// @access Private
const deleteOctopus = asyncHandler(async (req, res) => {
    console.log("Called Delete function");
    console.log(req.body);
    const octopuss = await Octopus.deleteOne({name: req.body.name}, function(err){
        if (err) {
            console.log("uh-oh");
        }
    });
    res.status(200).json({ message: "Success"});
})

module.exports = {
    getOctopus,
    postOctopus,
    updateOctopus,
    deleteOctopus
}