import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    producto: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    proveedor: {
      type: String,
      required: true,
    },
    precioV: {
      type: Number,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    disponible: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", taskSchema);
