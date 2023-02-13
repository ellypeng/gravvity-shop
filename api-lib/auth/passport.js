import { findUserForAuth, findUserWithEmailAndPassword } from '../db';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { getMongoDb } from '../mongodb';

passport.serializeUser((user, done) => {
  // console.log('serializeuser = ', user);
  done(null, user._id);
});

passport.deserializeUser((req, id, done) => {
  // console.log('deserializeuser = ', id);
  getMongoDb().then((db) => {
    findUserForAuth(db, id).then(
      (user) => {
        done(null, user);
        // console.log('user deserializeUser = ', user);
      },
      (err) => done(err)
    );
  });
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
      const db = await getMongoDb();
      const user = await findUserWithEmailAndPassword(db, email, password);
      // console.log('LocalStrategy user = ', user);
      if (user) done(null, user);
      else done(null, false, { message: 'Email or password is incorrect' });
    }
  )
);

export default passport;
