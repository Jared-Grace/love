import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebase_app_initialize } from "./firebase_app_initialize.mjs";
export async function firebase_auth_user_or_null() {
  "Who is signed in on this page, or null when nobody is - without ever asking anyone to sign in. Firebase only knows once it has finished reading what it kept from last time, so this waits for that first answer rather than reading a value that is still empty.";
  let app = await firebase_app_initialize();
  let auth = getAuth(app);
  let user = await new Promise(function lambda2(resolve) {
    function lambda(u) {
      unsubscribe();
      resolve(u);
    }
    let unsubscribe = onAuthStateChanged(auth, lambda);
  });
  return user;
}
