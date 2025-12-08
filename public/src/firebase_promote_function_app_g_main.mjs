import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { firebase_promote_function } from "../../../love/public/src/firebase_promote_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_promote_function_app_g_main() {
  marker("1");
  let v = await firebase_promote_function(app_g_main.name);
  return v;
}
