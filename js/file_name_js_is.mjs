import { file_extension_js } from "./file_extension_js.mjs";
import { js_file_suffix } from "./js_file_suffix.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
export function file_name_js_is(file_name) {
  "$plain file_name";
  "Answers whether a file name is one holding JavaScript, so a step that only makes sense over code can leave the rest of a folder alone.";
  "Both endings this repo uses count - the plain one a browser is sent and the module one a source file wears - because a caller asking this is asking about the contents, and the two names hold the same kind of thing.";
  "The name is all that is looked at. Nothing is read off disk, so this can be asked about a file that only exists as a name and a piece of text.";
  let plain = file_extension_js();
  let module_suffix = js_file_suffix();
  let is = text_ends_with_any(file_name, [plain, module_suffix]);
  return is;
}
