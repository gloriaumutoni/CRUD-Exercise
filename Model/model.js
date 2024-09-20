const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchemaItems = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});
const Items = mongoose.model("Items", SchemaItems);
module.exports = Items;