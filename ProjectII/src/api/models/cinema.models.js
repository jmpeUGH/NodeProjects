const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        movies: [{type: Schema.Types.ObjectId, ref: "movies"}]
    },
    {
        collection: "cinemas",
        timestamps: true
    }
);

const Cinema = mongoose.model('cinema', cinemaSchema);

module.exports = Cinema;