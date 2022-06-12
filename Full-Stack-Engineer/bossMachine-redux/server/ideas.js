const ideasRouter = require('express').Router();

module.exports = ideasRouter;

const checkMillionDollarIdea = require('./checkMillionDollarIdea');

const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');

ideasRouter.param('ideaId', (req,res,next,id) => {
    const idea = getFromDatabaseById('ideas',id);
    if(idea){
        req.idea = idea;
        next();
    } else {
        res.status(404).send('not found');
    }
});

ideasRouter.get('/', (req,res,next) => {
    res.send(getAllFromDatabase('ideas'));
});

ideasRouter.post('/', checkMillionDollarIdea, (req,res,next) => {
    const newIdea = addToDatabase('ideas',req.body);
    res.status(201).send(newIdea);
});

ideasRouter.get('/:ideaId', (req,res,next) => {
    res.send(req.idea);
});

ideasRouter.put('/', (req,res,next) => {
    const updateIdeaInstance = updateInstanceInDatabase('ideas',req.body);
    res.send(updateIdeaInstance);
});

ideasRouter.delete('/', (req,res,next) => {
    let deletedIdea = deleteFromDatabasebyId('ideas',req.params.id)
    if(deletedIdea) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});