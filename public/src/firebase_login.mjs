import { firebase_app_initialize } from "../../../love/public/src/firebase_app_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_login() {
  const app = await firebase_app_initialize();
  marker("1");
}
