import { firebase_deploy_function_destination } from "./firebase_deploy_function_destination.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function g_objection_generate_upload_path_generic(f_name, chapter_code) {
  let file_name = file_name_json(chapter_code);
  let joined = path_join(["uploads", file_name]);
  let destination = firebase_deploy_function_destination(f_name, joined);
  return destination;
}
