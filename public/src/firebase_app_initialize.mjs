import { firebase_config_get } from "../../../love/public/src/firebase_config_get.mjs";
export async function firebase_app_initialize() {
  const firebase = await import(
    "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"
  );
  let firebase_config = firebase_config_get();
  const app = firebase.initializeApp(firebase_config);
  return app;
}
