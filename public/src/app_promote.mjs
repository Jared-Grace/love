import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
import { app_karate_main } from "../../../karate_code/public/src/app_karate_main.mjs";
import { firebase_promote_function } from "../../../love/public/src/firebase_promote_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_promote() {
  marker("1");
  let combined = app_name_main(a);
  let v = await firebase_promote_function(app_karate_main.name);
  return v;
}
