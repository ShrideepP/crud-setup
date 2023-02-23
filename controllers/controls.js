const Note = require("../schema/note");

const home = (req, res) => {
    res.status(200).json({message: 'Ok'});
}

const postNotes = async (req, res) => {

    const data = req.body;
    const { title, details } = data;
    
    if(title && details) {
        const newNote = new Note(data);
        try {
            await newNote.save();
            res.status(201).json(newNote);  
        } catch (error) {
            res.status(401).json({ message: error.message });
        };
    } else res.status(401).json({ message: 'Bad Request' });

};

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({});
        res.status(201).json(notes);
    } catch (error) {
        res.status(401).json({ message: error.message });
    };
};

const getSingleNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        res.status(201).json(note);
    } catch (error) {
        res.status(401).json({ message: error.message });
    };
};

const editNote = async (req, res) => {

    const note = req.body;
    const updatedNote = new Note(note);

    try {
      await Note.updateOne({ _id: req.params.id }, updatedNote); 
      res.status(201).json(updatedNote); 
    } catch (error) {
        res.status(401).json({ message: error.message });
    };
    
};

const deleteNote = async (req, res) => {
    try {
        await Note.deleteOne({
            _id: req.params.id
        });
        res.status(201).json({ message: 'note deleted successfully' }); 
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = {
    home,
    postNotes,
    getNotes,
    getSingleNote,
    editNote,
    deleteNote,
};