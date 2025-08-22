import { function_path_declaration_unparse } from "./function_path_declaration_unparse.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { file_open_editor } from "./file_open_editor.mjs";
import { file_read } from "./file_read.mjs";
import { log_keep } from "./log_keep.mjs";
import { data_terminal_get } from "./data_terminal_get.mjs";
export async function file_open(f_path) {
  let terminal = await data_terminal_get();
  if (terminal) {
    let ext = function_name_extension();
    let ew = string_ends_with(f_path, ext);
    let output = null;
    if (ew) {
      output = await function_path_declaration_unparse(f_path);
    } else {
      output = await file_read(f_path);
    }
    log_keep(output);
  } else {
    await file_open_editor(f_path);
  }
}
