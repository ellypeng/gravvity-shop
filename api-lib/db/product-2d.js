import { ObjectId } from 'mongodb';
import { dbProjectionUsers } from './user';

export async function insertProduct2D(
    db, 
    { type, price, name, inventory, desc, notes, product_index, pos_y, url, creatorId }) {

    const product2d = {
        type,
        url,
        product_index, 
        pos_y,
        type,
        price,
        name,
        inventory,
        desc,
        notes,
        creatorId,
        createdAt: new Date(),
    };
    // console.log('product 2d = ', product2d)
    const { insertedId } = await db.collection('product2D').insertOne(product2d);
    product2d._id = insertedId;
    return product2d;
}