import { findUserById } from '../../api-lib/db';
import { getMongoDb } from '../../api-lib/mongodb';
import { auths, validateBody } from '../../api-lib/middlewares';
import { ncOpts } from '../../api-lib/nc';
import multer from 'multer';
import nc from 'next-connect';
import { v2 as cloudinary } from 'cloudinary';
import { insertProduct2D } from '../../api-lib/db/product-2d'
import { ObjectID } from 'bson';

const upload = multer({ dest: '/tmp' });
const handler = nc(ncOpts);

if (process.env.CLOUDINARY_URL) {
    const {
      hostname: cloud_name,
      username: api_key,
      password: api_secret,
    } = new URL(process.env.CLOUDINARY_URL);
  
    cloudinary.config({
      cloud_name,
      api_key,
      api_secret,
    });
}

handler.use(...auths);

handler.post(
    upload.single('product2d'),
    ...auths,
    async (req, res) => {
      if (!req.user) {
        req.status(401).end();
        return;
      }
  
      const db = await getMongoDb();
  
      let url;
      // console.log('product req = ', req.body)

      if (req.file) {
        const image = await cloudinary.uploader.upload(req.file.path, {
          folder: 'product-2d',
        });
        url = image.secure_url;
      }
      const { type, price, name, inventory, desc, notes, product_index } = req.body;

      const product2d = await insertProduct2D(db, {
        url: url,
        product_index: product_index, 
        pos_y: '2',
        type: type,
        price: price,
        name: name,
        inventory: inventory,
        desc: desc,
        notes: notes,
        creatorId: req.user._id,
      });
  
      return res.json({ product2d });
    }
  );
  
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  export default handler;