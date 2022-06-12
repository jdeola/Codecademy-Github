const meetingsRouter = require('express').Router();

module.exports = meetingsRouter;

const {
    getAllFromDatabase,
    addToDatabase,
    createMeeting,
    deleteAllFromDatabase,
  } = require('./db');

meetingsRouter.get('/', (req,res,next) => {
    res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req,res,next) => {
    const newMeeting = addToDatabase('meetings', createMeeting())
    res.send(newMeeting);
});

meetingsRouter.delete('/', (req,res,next) => {
    let deleted = deleteAllFromDatabase('meetings');
    if(deleted){
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});