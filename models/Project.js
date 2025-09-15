import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    setupProcedure: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    demoLink: {
      type: String,
      required: false,
    },
    githubLink: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    techStack: [
      {
        type: String,
      },
    ],
    screenshots: [
      {
        type: String,
      },
    ],
    demoImages: [
      {
        public_id: { type: String },
        url: { type: String },
      },
    ],
    majorProject: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
