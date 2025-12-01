import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { g_objection_generate } from "../../../love/public/src/g_objection_generate.mjs";
import { firebase_deploy_function_destination } from "../../../love/public/src/firebase_deploy_function_destination.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export function g_objection_generate_upload_path(chapter_code) {
  let file_name = file_name_json(chapter_code);
  let joined2 = path_join(["uploads", file_name]);
  let destination = firebase_deploy_function_destination(
    g_objection_generate.name,
    joined2,
  );
  return destination;
}
