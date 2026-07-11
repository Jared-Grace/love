import { global_function_async } from "../../../love/public/src/global_function_async.mjs";
import { firebase_config_get } from "../../../love/public/src/firebase_config_get.mjs";
import { initializeApp } from "firebase/app";
export async function firebase_app_initialize() {
  async function lambda() {
    'const firebase = await import(\n      "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"\n    );';
    let firebase_config = firebase_config_get();
    let app = initializeApp(firebase_config);
    return app;
  }
  let awaited = await global_function_async(firebase_app_initialize, lambda);
  return awaited;
}
