const express = require("express");
const router = express.Router();
import * as controller from './jsforce.controller';




router.get('/property',controller.makeJSForceCalloutAndSaveInDB);

module.exports = router;
