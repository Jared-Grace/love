import {list_join} from "./list_join.mjs";
import {file_name_json} from "./file_name_json.mjs";
export function firebase_deploy_function_destination(name, f_name) {
  let file_name = file_name_json(name);
  let destination = list_join(["function", f_name, file_name], "/");
  return destination;
}
