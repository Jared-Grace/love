import { fn_name } from "./fn_name.mjs";
import { file_temp_value_keep_open } from "./file_temp_value_keep_open.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
export async function file_temp_value_open(value) {
  "One value put in front of the human as a file of its own, and the path it was written to for as long as it took to open it.";
  ("DO NOT REACH FOR THIS ONE. It deletes the file as soon as the editor has been LAUNCHED, on the belief that launching it is the same as it having read the contents. It is not: ",
    fn_name("file_open_editor"),
    " runs 'code <path>', which returns as soon as the already-running window has been messaged, and the read happens after that. So the delete races the read, and the human intermittently opens a blank buffer - which reads as the fn having returned nothing at all. Call ",
    fn_name("file_temp_value_keep_open"),
    " instead and leave the file behind.");
  ("The twin that leaves the file where it is, for whatever wants to read it again, is ",
    fn_name("file_temp_value_keep_open"),
    ".");
  let temp_path = await file_temp_value_keep_open(value);
  await file_delete_if_exists(temp_path);
  return temp_path;
}
