import { firebase_deploy_function_destination } from "../../../love/public/src/firebase_deploy_function_destination.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
export function firebase_deploy_function_destination_json(name, f_name) {
  marker("1");
  let file_name = file_name_json(name);
  let destination = firebase_deploy_function_destination(f_name, file_name);
  return destination;
}
