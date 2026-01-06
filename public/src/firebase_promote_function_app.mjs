import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
import { firebase_promote_function } from "../../../love/public/src/firebase_promote_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_promote_function_app(a) {
  marker("1");
  let f_name = app_name_main(a);
  let v = await firebase_promote_function(f_name);
  return v;
}
