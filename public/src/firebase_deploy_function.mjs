import { firebase_deploy_function_destination_version } from "./firebase_deploy_function_destination_version.mjs";
import { marker } from "./marker.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { firebase_deploy_function_destination } from "./firebase_deploy_function_destination.mjs";
import { date_now_file } from "./date_now_file.mjs";
import { function_dependencies_code } from "./function_dependencies_code.mjs";
import { firebase_upload_string } from "./firebase_upload_string.mjs";
export async function firebase_deploy_function(f_name) {
  marker("1");
  let code = await function_dependencies_code(f_name);
  let now_file = date_now_file();
  let destination = firebase_deploy_function_destination(now_file, f_name);
  await firebase_upload_string(code, destination);
  let version = {
    destination,
  };
  let destination_version =
    firebase_deploy_function_destination_version(f_name);
  await firebase_upload_object(version, destination_version);
}
