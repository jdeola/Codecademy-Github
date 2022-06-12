const minionsRouter = require('express').Router();

module.exports = minionsRouter;

const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');

 //router.params checks for existence by Id and attaches 
 //relevant id to req.body to be used later

 minionsRouter.param('minionId', (req,res,next,id) => {
     const minion = getFromDatabaseById('minions', id);
     if(minion) {
         req.minion = minion;
         next();
     } else {
         res.status(404).send('not found');
     }
 });

 minionsRouter.get('/', (req,res,next) => {
     res.send(getAllFromDatabase('minions'));
 });
 
 minionsRouter.post('/', (req,res,next) => {
     const newMinion = addToDatabase('minions', req.body);
     res.status(201).send(newMinion);
 })

 minionsRouter.get('/:minionId', (req,res,next) => {
     res.send(req.minion);
 });

 minionsRouter.put('/:minionId', (req,res,next) => {
     const updateMinionInstance = updateInstanceInDatabase('minions',req.body);
     res.send(updateMinionInstance);
 });

 minionsRouter.delete('/:minionId', (req,res,next) => {
     let deleted = deleteFromDatabasebyId('minions',req.params.minionId)
     if(deleted){
         res.status(204);
     } else {
         res.status(500);
     } 
     res.send();
 });

