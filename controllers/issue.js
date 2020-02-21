const express = require('express');
const issueRouter = express.Router();

// import APIs
const Issue = require('../models/Issue.js')

// request handlers
// get all issues
issueRouter.get('/', (req, res) => {
  Issue.find().then(issues => {
    console.log(issues);
    res.render('issues/issues', { issues });
  });
});

// router export
module.exports = issueRouter;
