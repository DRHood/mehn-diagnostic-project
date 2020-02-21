const express = require('express');
const issuesRouter = express.Router();

// import APIs
const Issue = require('../models/Issue.js');

// request handlers
// get all issues
issuesRouter.get('/', (req, res) => {
  Issue.find().then(issues => {
    console.log(issues);
    res.render('issues/issues', { issues });
  });
});

// post new issue
issuesRouter.post('/', (req, res) => {
 Issue.create(req.body).then(issues => {
      res.redirect('/issues');
  });
});

// get new issue form
issuesRouter.get('/new', (req, res) => {
  res.render('issues/newIssueForm');
});

// get issue edit form
issuesRouter.get('/:issueId/edit', (req, res) => {
  Issue.findById(req.params.issueId).then((issue) => {
      res.render('issues/editIssueForm', {issue});
  });
});

// put issue edit
issuesRouter.put('/:issueId', (req, res) => {
  Issue.findByIdAndUpdate(req.params.issueId, req.body).then(issue => {
    res.redirect('/issues');
  });
});

// get single issue
issuesRouter.get('/:issueId', (req, res) => {
  Issue.findById(req.params.issueId).then(issue => {
      res.render('./issues/issue', {issue});
  });
});

// delete issue
issuesRouter.delete('/:issueId', (req, res) => {
  Issue.findByIdAndRemove(req.params.issueId).then(() => {
      res.redirect('/issues');
  });
});

// router export
module.exports = issuesRouter;