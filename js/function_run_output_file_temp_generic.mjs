import { fn_name } from "./fn_name.mjs";
import { file_temp_value_keep_open } from "./file_temp_value_keep_open.mjs";
import { function_run_unalias } from "./function_run_unalias.mjs";
export async function function_run_output_file_temp_generic(f_name, args) {
  "One fn's result put in front of the human as a file of its own, and the path it was written to.";
  ("THE FILE IS KEPT. Its twin ",
    fn_name("file_temp_value_open"),
    " deletes it the moment the editor has been LAUNCHED, which is not the moment the editor has READ it: ",
    fn_name("file_open_editor"),
    " runs 'code <path>', and that returns as soon as the running window has been messaged. The delete then races the read, and the human opens a blank buffer - which is what happened, intermittently, and looked like the fn returning nothing.");
  let result = await function_run_unalias(f_name, args);
  let temp_path = await file_temp_value_keep_open(result);
  return temp_path;
}
