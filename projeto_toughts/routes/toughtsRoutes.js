const express = require('express');
const router = express.Router();

//controller
router.get('/', ToughtsController.showToughts);

module.exports = router;