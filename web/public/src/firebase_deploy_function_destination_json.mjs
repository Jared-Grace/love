import { marker } from "../../../love/public/src/marker.mjs";
import { list_join_slash_forward } from "../../../love/public/src/list_join_slash_forward.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
export function firebase_deploy_function_destination_json(name, f_name) {
  marker("1");
  let file_name = file_name_json(name);
  const list = ["function", f_name, file_name];
  let destination = list_join_slash_forward(list);
  return destination;
}
