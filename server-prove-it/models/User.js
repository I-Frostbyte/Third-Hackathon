import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      min: 8,
      max: 50,
      unique: true,
    },
    userId: {
      type: String,
      required: true,
      min: 2,
      max: 100,
      unique: true,
    },
    activities: {
      type: Array,
    },
    workingHours: {
      type: Array,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "admin",
    },
    projects: {
        type: Array,
        required: true,
    },
    team: {
        type: String,
        required: true,
    },
    timeTrackingStatus: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema)
export default User;

