import { global_function_async } from "../../../love/public/src/global_function_async.mjs";
import { firebase_config_get } from "../../../love/public/src/firebase_config_get.mjs";
export async function firebase_app_initialize() {
  async function lambda2() {
    const firebase = await import(
      "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"
    );
    let firebase_config = firebase_config_get();
    const app = firebase.initializeApp(firebase_config);
  }
  let awaited = await global_function_async(firebase_app_initialize, lambda2);
  return awaited;
}
