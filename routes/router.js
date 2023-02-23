const express = require("express");
const router = express.Router();
const controles = require("../controllers/controls");

const { home, postNotes, getNotes, getSingleNote, editNote, deleteNote } = controles;

router.get("/", home);

router.post("/add", postNotes);

router.get('/all', getNotes);

router.get('/note/:id', getSingleNote);

router.put('/note/:id', editNote);

router.delete('/note/:id', deleteNote);

module.exports = router;