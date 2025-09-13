import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function firebase_deploy_function_destination(name, f_name) {
  let file_name = file_name_json(name);
  const list = ["function", f_name, file_name];
  let destination = list_join_slash_forward(list);
  return destination;
}
