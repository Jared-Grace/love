import { app_karate_main } from "../../../karate_code/public/src/app_karate_main.mjs";
import { firebase_promote_function } from "../../../love/public/src/firebase_promote_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_promote_function_app_g_main() {
  marker("1");
  let v = await firebase_promote_function(app_karate_main.name);
  return v;
}
