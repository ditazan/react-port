const mongoose = require("mongoose");

const { Schema } = mongoose;

const projectSchema= new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    intro:{
        type: String,
        required: false
    },
    // MAY WANT FOR FILTER COMPONENT
  filter: {
    type: Schema.Types.ObjectId,
    ref: "Image",
    required: "false",
  },
});

const Project = mongoose.model(Project, projectSchema);

module.exports= Project;