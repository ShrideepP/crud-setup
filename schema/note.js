const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const noteSchema = mongoose.Schema({
    title: String,
    details: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

autoIncrement.initialize(mongoose.connection);
noteSchema.plugin(autoIncrement.plugin, 'note');

const Note = mongoose.model('note', noteSchema);

module.exports = Note;