import { ObjectId } from 'mongodb';
import { dbProjectionUsers } from './user';

export async function insertProductLogo(
    db, 
    { pos_y, url, creatorId }) {

    const productlogo = {
        url,
        pos_y,
        creatorId,
        createdAt: new Date(),
    };
    // console.log('product logo = ', productlogo)
    const { insertedId } = await db.collection('productLogo').insertOne(productlogo);
    productlogo._id = insertedId;
    return productlogo;
}