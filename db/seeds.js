const Issue = require('..models/issue.js');

const newIssue = [
    {
        desription: 'Server crashed',
        createdAt: new Date(1970, 1, 1),
        status: 'open',
        priority: 'Low',
    },
];

Issue.deleteMany().then(() => {
    return Issue.create(newIssue)
}).then(() => {
    console.log('seeded');
});