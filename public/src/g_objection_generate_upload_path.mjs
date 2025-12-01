import { g_objection_generate } from "../../../love/public/src/g_objection_generate.mjs";
import { firebase_deploy_function_destination } from "../../../love/public/src/firebase_deploy_function_destination.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export function g_objection_generate_upload_path(fb) {
  let joined2 = path_join(["uploads", fb]);
  let destination = firebase_deploy_function_destination(
    g_objection_generate.name,
    joined2,
  );
  return destination;
}
