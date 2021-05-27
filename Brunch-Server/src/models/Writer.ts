import mongoose from "mongoose";
import { IWriterTag } from "../interfaces/IWriterTag";

const WriterSchema = new mongoose.Schema({
    pet: [
        {
            profileImg: {
                type: String,
                required: true,
            },
            writerName: {
                type: String,
                required: true,
            },
            writerJob: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            tags: [
                {
                    tag1: {
                        type: String,
                        required: true,
                    },
                    tag2: {
                        type: String,
                        required: true,        
                    },
                    tag3: {
                        type: String,
                        required: true,
                    }
                }
            ]
        }
    ],
    create: [
        {
            profileImg: {
                type: String,
                required: true,
            },
            writerName: {
                type: String,
                required: true,
            },
            writerJob: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            tags: [
                {
                    tag1: {
                        type: String,
                        required: true,
                    },
                    tag2: {
                        type: String,
                        required: true,        
                    },
                    tag3: {
                        type: String,
                        required: true,
                    }
                }
            ]
        }
    ],
    journey: [
        {
            profileImg: {
                type: String,
                required: true,
            },
            writerName: {
                type: String,
                required: true,
            },
            writerJob: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            tags: [
                {
                    tag1: {
                        type: String,
                        required: true,
                    },
                    tag2: {
                        type: String,
                        required: true,        
                    },
                    tag3: {
                        type: String,
                        required: true,
                    }
                }
            ]
        }
    ]
})

export default mongoose.model<IWriterTag & mongoose.Document>("Writer", WriterSchema);
