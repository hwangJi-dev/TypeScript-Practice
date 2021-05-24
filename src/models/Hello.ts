import mongoose from "mongoose";
import { IHello } from "../interfaces/IHello";

const HelloSchema = new mongoose.Schema({
    feeling: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

export default mongoose.model<IHello & mongoose.Document>(
    "Hello",
    HelloSchema
);