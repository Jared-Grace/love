import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
import { firebase_deploy_function } from "../../../love/public/src/firebase_deploy_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_deploy_function_app_main(f_name) {
  marker("1");
  let combined = app_name_main(a);
  let v = await firebase_deploy_function(f_name);
  return v;
}
