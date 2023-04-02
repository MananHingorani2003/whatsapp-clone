import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@ac-cuoplyn-shard-00-00.55qh9ic.mongodb.net:27017,ac-cuoplyn-shard-00-01.55qh9ic.mongodb.net:27017,ac-cuoplyn-shard-00-02.55qh9ic.mongodb.net:27017/?ssl=true&replicaSet=atlas-mt6syq-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 