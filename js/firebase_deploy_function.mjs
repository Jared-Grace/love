import { function_dependencies_code_unaliased } from "./function_dependencies_code_unaliased.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_deploy_function_destination_latest } from "./firebase_deploy_function_destination_latest.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { firebase_deploy_function_destination_json } from "./firebase_deploy_function_destination_json.mjs";
import { date_now_file } from "./date_now_file.mjs";
export async function firebase_deploy_function(f_name) {
  let v = await function_dependencies_code_unaliased(f_name);
  let unaliased = property_get(v, "unaliased");
  let d = property_get(v, "d");
  let code = property_get(d, "code");
  let now_file = date_now_file();
  let destination = firebase_deploy_function_destination_json(
    now_file,
    unaliased,
  );
  await firebase_upload_object(destination, {
    code,
  });
  let version = {
    destination,
  };
  let destination_version =
    firebase_deploy_function_destination_latest(unaliased);
  await firebase_upload_object(destination_version, version);
}
