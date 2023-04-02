import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-cuoplyn-shard-00-00.55qh9ic.mongodb.net:27017,ac-cuoplyn-shard-00-01.55qh9ic.mongodb.net:27017,ac-cuoplyn-shard-00-02.55qh9ic.mongodb.net:27017/?ssl=true&replicaSet=atlas-mt6syq-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect (URL, {useUnifiedTopology: true});
        console.log ('Database connected successfully!');
    } catch (error) {
        console.log ('Error while connecting to database!!!', error.message);
    }
}

export default Connection;