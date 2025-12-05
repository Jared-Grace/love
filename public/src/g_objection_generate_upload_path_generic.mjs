import { firebase_deploy_function_destination } from "../../../love/public/src/firebase_deploy_function_destination.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
export function g_objection_generate_upload_path_generic(chapter_code, f_name) {
  let file_name = file_name_json(chapter_code);
  let joined2 = path_join(["uploads", file_name]);
  let destination = firebase_deploy_function_destination(f_name, joined2);
  return destination;
}
