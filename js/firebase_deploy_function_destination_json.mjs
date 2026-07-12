import { firebase_deploy_function_destination } from "./firebase_deploy_function_destination.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function firebase_deploy_function_destination_json(name, f_name) {
  let file_name = file_name_json(name);
  let destination = firebase_deploy_function_destination(f_name, file_name);
  return destination;
}
