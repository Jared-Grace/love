import { function_path_declaration_unparse } from "./function_path_declaration_unparse.mjs";
import { file_open_seam_assert } from "./file_open_seam_assert.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { file_open_editor } from "./file_open_editor.mjs";
import { file_read } from "./file_read.mjs";
import { log_keep } from "./log_keep.mjs";
import { data_terminal_get } from "./data_terminal_get.mjs";
export async function file_open(f_path) {
  "Puts a file in front of the human - on their screen when this invocation wanted that, and in the terminal when it did not.";
  "It used to throw rather than print whenever Claude reached it, and the advice it threw was to call the twin without the open ending. That advice only works when such a twin exists, and around twenty fns reach an opener without having one, so the message asked for something impossible - after the work had already been done, since the opening is the last step. What Claude saw was a failure for a rename that had in fact landed.";
  "The seam marker's own description already promised this: it says it marks the process so that a fn which would launch an editor prints instead. That branch was here the whole time, sitting behind a check that threw before it could run.";
  let wanted = process_open_wanted_is();
  let terminal = await data_terminal_get();
  let printed = or(terminal, not(wanted));
  if (printed) {
    let ext = function_name_extension();
    let ew = text_ends_with(f_path, ext);
    let output = null;
    if (ew) {
      output = await function_path_declaration_unparse(f_path);
    } else {
      output = await file_read(f_path);
    }
    log_keep(file_open.name, output);
  } else {
    await file_open_editor(f_path);
  }
}
