import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function firebase_deploy_function_destination(f_name, file_name) {
  let list = ["function", f_name, file_name];
  let destination = list_join_slash_forward(list);
  return destination;
}
