import { ObjectId } from 'mongodb';
import { dbProjectionUsers } from './user';

export async function insertProductModel(
    db, 
    { type, price, name, inventory, desc, notes, product_index, pos_y, rot_x, rot_y, rot_z, scal_x, scal_y, scal_z, url, creatorId }) {

    const productmodel = {
        type,
        url,
        product_index, 
        pos_y,
        rot_x,
        rot_y,
        rot_z,
        scal_x,
        scal_y,
        scal_z,
        type,
        price,
        name,
        inventory,
        desc,
        notes,
        creatorId,
        createdAt: new Date(),
    };

    // console.log('product model = ', productmodel)
    const { insertedId } = await db.collection('productmodel').insertOne(productmodel);
    productmodel._id = insertedId;
    return productmodel;
}