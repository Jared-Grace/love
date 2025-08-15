import { function_parse_declaration_js_unparse } from "./function_parse_declaration_js_unparse.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { file_open_editor } from "./file_open_editor.mjs";
import { marker } from "./marker.mjs";
import { command_line } from "./command_line.mjs";
import { file_read } from "./file_read.mjs";
import { log } from "./log.mjs";
export async function file_open(f_path) {
  let terminal = true;
  if (terminal) {
    let ext = function_name_extension();
    let ew = string_ends_with(f_path, ext);
    let output = null;
    if (ew) {
      let f_name = function_path_to_name(f_path);
      output = await function_parse_declaration_js_unparse(f_name);
    } else {
    }
    log(await file_read(f_path));
  } else {
    await file_open_editor(f_path);
  }
}
