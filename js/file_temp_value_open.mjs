import { fn_name } from "./fn_name.mjs";
import { file_temp_value_keep_open } from "./file_temp_value_keep_open.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
export async function file_temp_value_open(value) {
  "One value put in front of the human as a file of its own, and the path it was written to for as long as it took to open it.";
  "The file is deleted as soon as the editor has been handed it. That is the point rather than a hazard: the editor reads the contents into a buffer of its own, so the window stays open on them while the temp folder is left holding nothing to clear later.";
  ("The twin that leaves the file where it is, for whatever wants to read it again, is ",
    fn_name("file_temp_value_keep_open"),
    ".");
  let temp_path = await file_temp_value_keep_open(value);
  await file_delete_if_exists(temp_path);
  return temp_path;
}
