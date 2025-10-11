import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
import { firebase_promote_function } from "../../../love/public/src/firebase_promote_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_promote(name) {
  marker("1");
  let combined = app_name_main(name);
  let v = await firebase_promote_function(combined);
  return v;
}
