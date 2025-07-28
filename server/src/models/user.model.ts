import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  userName: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
});

export const User = mongoose.model<IUser>("User", userSchema);
