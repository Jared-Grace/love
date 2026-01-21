import { log } from "../../../love/public/src/log.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { firebase_app_initialize } from "../../../love/public/src/firebase_app_initialize.mjs";
export async function firebase_login(context, on_logged_in) {
  const app = await firebase_app_initialize();
  const firebase_auth = await import(
    "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js"
  );
  const auth = firebase_auth.getAuth(app);
  function lambda(result) {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    log({});
  }
  function lambda2(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    log({});
  }
  getRedirectResult(auth).then(lambda).catch(lambda2);
}
