import { firebase_deploy_function_destination } from "./firebase_deploy_function_destination.mjs";
import { date_now_file } from "./date_now_file.mjs";
import { function_dependencies_code } from "./function_dependencies_code.mjs";
import { firebase_upload_string } from "./firebase_upload_string.mjs";
import { json_to } from "./json_to.mjs";
export async function firebase_deploy_function(f_name) {
  let code = await function_dependencies_code(f_name);
  let now_file = date_now_file();
  let destination = firebase_deploy_function_destination(now_file, f_name);
  await firebase_upload_string(code, destination);
  let version = {
    destination,
  };
  let content = json_to(version);
  let destination_version = firebase_deploy_function_destination(
    now_file,
    f_name,
  );
  await firebase_upload_string(content, destination_version);
}
