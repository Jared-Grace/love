import { firebase_deploy_function } from "./firebase_deploy_function.mjs";
import { marker } from "./marker.mjs";
export async function firebase_deploy_function_app_current(f_name) {
  marker("1");
  return await firebase_deploy_function(f_name);
}
