import { firebase_deploy_function } from "../../../love/public/src/firebase_deploy_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_deploy_function_app_main(f_name) {
  marker("1");
  let v = await firebase_deploy_function(f_name);
  return v;
}
