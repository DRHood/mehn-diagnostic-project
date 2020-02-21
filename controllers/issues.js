const express = require('express');
const issuesRouter = express.Router();

// import APIs
const Issue = require('../models/Issue.js')

// request handlers
// get all issues
issuesRouter.get('/', (req, res) => {
  Issue.find().then(issues => {
    console.log(issues);
    res.render('issues/issues', { issues });
  });
});

// router export
module.exports = issuesRouter;