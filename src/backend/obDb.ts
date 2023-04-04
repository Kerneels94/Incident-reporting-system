/**
 * Using mongoose and express in combination with mongodb to save data for the ob entries
 */

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDb = "mongodb://127.0.0.1/databse";

export async function dbConnect() {
  await mongoose.connect(mongoDb);
}

// Schema
const Scheme = mongoose.scheme;

const model = new Scheme({
  a_string: String,
  a_date: Date,
});

// Compile model
const obEntry = mongoose.model("modal", model);
