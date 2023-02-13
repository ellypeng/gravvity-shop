import { findUserById } from '../../api-lib/db';
import { getMongoDb } from '../../api-lib/mongodb';
import { auths, validateBody } from '../../api-lib/middlewares';
import { ncOpts } from '../../api-lib/nc';
import multer from 'multer';
import nc from 'next-connect';
import { v2 as cloudinary } from 'cloudinary';
import { insertProductVideo } from '../../api-lib/db/product-video'
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
    upload.single('productvideo'),
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
        const video = await cloudinary.uploader.upload(req.file.path, {
          resource_type: "video",
          folder: 'product-video',
        });
        // console.log('video = ', video)
        url = video.secure_url;

      }

      const productvideo = await insertProductVideo(db, {
        url: url,
        creatorId: req.user._id,
      });
      
      return res.json({ productvideo });
    }
  );
  
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  export default handler;