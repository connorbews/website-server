const express = require('express');
const cors = require('cors');
const { getOctopus, postOctopus, updateOctopus, deleteOctopus } = require('../controllers/octopusControllers')
const router = express.Router()

router.route('/').get(getOctopus).post(postOctopus).put(updateOctopus).delete(deleteOctopus);

module.exports = router