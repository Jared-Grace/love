import { ternary } from "../../../love/public/src/ternary.mjs";
import { function_path_declaration_unparse } from "../../../love/public/src/function_path_declaration_unparse.mjs";
import { function_name_extension } from "../../../love/public/src/function_name_extension.mjs";
import { text_ends_with } from "../../../love/public/src/text_ends_with.mjs";
import { file_open_editor } from "../../../love/public/src/file_open_editor.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { data_terminal_get } from "../../../love/public/src/data_terminal_get.mjs";
export async function file_open(f_path) {
  let terminal = await data_terminal_get();
  if (terminal) {
    let ext = function_name_extension();
    let ew = text_ends_with(f_path, ext);
    let output = null;
    output = ternary(
      ew,
      await function_path_declaration_unparse(f_path),
      await file_read(f_path),
    );
    log_keep(output);
  } else {
    await file_open_editor(f_path);
  }
}
