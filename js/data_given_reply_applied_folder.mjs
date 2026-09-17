import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
export function data_given_reply_applied_folder() {
  "Where the changes to the reply rules that have already gone into the code are written down, one file each, named after the function each one altered.";
  let given = data_given_folder();
  let v = path_join([given, "reply_applied"]);
  return v;
}
