const mongoose = require("mongoose");

const employeSchema = mongoose.Schema(
  {	
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    contact: {
        required: true,
        type: Number,
    },
    emailId: {
        required: true,
        type: String,
    },
    employeId: {
      required: true,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Employe = mongoose.model("Employe", employeSchema);
module.exports  = Employe;