import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_dev_stamps_folder } from "./data_given_dev_stamps_folder.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { path_join } from "./path_join.mjs";
export function app_shared_dev_stamp_path(a_name) {
  arguments_assert(arguments, 1);
  ("$plain a_name");
  ("Where the record of what one app's dev bundle was built out of sits.");
  ("One file for each app rather than one table holding them all, because several people build several apps at once in this one working folder, and two builds writing one table lose one of the two writes and say nothing about it.");
  let folder = data_given_dev_stamps_folder();
  let file = file_name_json(a_name);
  let p = path_join([folder, file]);
  return p;
}
