import { firebase_app_initialize } from "../../../love/public/src/firebase_app_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_login() {
  const app = await firebase_app_initialize();
  const firebaseAuth = await import(
    "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js"
  );
  marker("1");
}
