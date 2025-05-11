// models/Service.ts
import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: String,
  icon: String, // store icon name like "FaCode"
  features: [String],
});

export default mongoose.models.Service || mongoose.model("Service", ServiceSchema);
