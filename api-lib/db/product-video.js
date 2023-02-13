import { ObjectId } from 'mongodb';
import { dbProjectionUsers } from './user';

export async function insertProductVideo(
    db, 
    { pos_y, url, creatorId }) {

    const productvideo = {
        url,
        pos_y,
        creatorId,
        createdAt: new Date(),
    };
    // console.log('product video = ', productvideo)
    const { insertedId } = await db.collection('productvideo').insertOne(productvideo);
    productvideo._id = insertedId;
    return productvideo;
}