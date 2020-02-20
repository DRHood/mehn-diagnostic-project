const mongoose = require('mongoose');

const issueTracking = process.env.MONGODB_URI || "mongodb://localhost/known-issues";

mongoose.connect(issueTracking, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongoDB at: " + issueTracking);
  });

module.exports = mongoose;
