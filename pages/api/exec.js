import { findUserById } from '../../api-lib/db';
import { getMongoDb } from '../../api-lib/mongodb';
import { ncOpts } from '../../api-lib/nc';
import nc from 'next-connect';
import {execa} from 'execa';
import path from 'path'
import fs from 'fs'

const handler = nc(ncOpts);

handler.post(async (req, res) => {
  let absolutePath = path.join(__dirname);
  let projectPath = path.join(absolutePath, '..', '..', '..', '..')
  // path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
  let targetPath = path.join(projectPath, 'styles1');
  if (!fs.existsSync(targetPath)){
    fs.mkdirSync(targetPath);
  }
  const {stdout} = await execa('copy', [path.join(projectPath, 'styles'), targetPath]);
  // console.log(stdout);
  const user = 'handler post success user';
  // console.log('path = ', path.basename(process.cwd()))
  res.json({ user: user });
});

// handler.get(async (req, res) => {
//     const {stdout} = await execa('echo', ['unicorns2']);
//     // console.log(stdout);
//     const db = await getMongoDb();
//     const user = 'get success user';
//     res.json({ user });
// });

export default handler;
