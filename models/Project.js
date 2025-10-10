import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      trim: true
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 2000,
      trim: true
    },
    setupProcedure: {
      type: String,
      required: true,
      maxlength: 5000,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      max: 10000
    },
    demoLink: {
      type: String,
      required: false,
      trim: true
    },
    githubLink: {
      type: String,
      required: false,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: ['web', 'mobile', 'desktop', 'api', 'other'],
      trim: true
    },
    techStack: [
      {
        type: String,
        trim: true
      },
    ],
    screenshots: [
      {
        type: String,
        trim: true
      },
    ],
    demoImages: [
      {
        public_id: { type: String, trim: true },
        url: { type: String, trim: true },
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

// Indexes for performance
ProjectSchema.index({ category: 1 });
ProjectSchema.index({ majorProject: 1 });
ProjectSchema.index({ createdAt: -1 });
ProjectSchema.index({ title: 'text', description: 'text' });
ProjectSchema.index({ price: 1 });

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
