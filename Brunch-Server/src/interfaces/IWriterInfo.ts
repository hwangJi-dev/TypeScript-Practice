import mongoose from "mongoose";
export interface IWriterInfo {
    profileImg: string;
    writerName: string;
    writerJob: string;
    description: string;
    tags: [
        {
            tag1: string;
            tag2: string;
            tag3: string;
        }
    ]
};
