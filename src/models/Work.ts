import { Schema, model, models } from "mongoose";

const workSchema = new Schema({
  title: String,
  description: String,
  image: String,
  github: String,
});

const Work = models.Work || model("Work", workSchema);
export default Work;
