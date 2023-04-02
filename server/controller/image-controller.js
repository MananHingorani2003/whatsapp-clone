const url = 'http://localhost:8000';
import grid from 'gridfs-stream';
import mongoose from 'mongoose';

let gfs, gridFsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

export const uploadFile = (request, response) => {
    if(!request.file) {
        return response.status(404).json("File not found");
    }
    const imageUrl = `${url}/file/${request.file.filename}`;
    response.status(200).json(imageUrl);    
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        return response.status(500).json({ msg: error.message });
    }
}