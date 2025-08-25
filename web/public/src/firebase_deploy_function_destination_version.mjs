import {firebase_deploy_function_destination} from "./firebase_deploy_function_destination.mjs";
export function firebase_deploy_function_destination_version(f_name) {
  let destination2 = firebase_deploy_function_destination("version", f_name);
  return destination2;
}
