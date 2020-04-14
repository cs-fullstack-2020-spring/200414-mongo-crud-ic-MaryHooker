//create model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance
let EntrySchema = new Schema(

    {
        videoTitle: String,
        videoEditor: String,
        videoActor: String,
        videoDuration: Number
    }

)

//export model
module.exports = mongoose.model('200414inClass', EntrySchema);


