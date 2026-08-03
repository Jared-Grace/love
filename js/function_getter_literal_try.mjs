import { folder_js } from "./folder_js.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { js_code_getter_literal } from "./js_code_getter_literal.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
export async function function_getter_literal_try(f_name) {
  "The one written word a named function hands back, and nothing at all when it hands back anything else or when no file here answers to the name.";
  "Asked wherever something has to tell a word somebody chose apart from a value worked out while the code runs, which is the question standing behind every freeze: only a fixed word can be recorded, and only a recorded word can be watched.";
  "Nothing rather than the empty word, because the reader beneath this answers a name that is not a getter and a getter holding an empty word with the same empty answer, and every caller then has to remember which it got. Nothing cannot be mistaken for a word.";
  "A missing file is the same nothing as a name that holds no word. What reaches here is whatever happened to be standing in a slot, and plenty of that is written by hand or comes from somewhere else entirely, so a name with no file behind it is ordinary rather than wrong.";
  let dir = folder_js();
  let path = js_file_dir_path(dir, f_name);
  let code = await file_read_try(path);
  let unwritten = null_is(code);
  if (unwritten) {
    return null;
  }
  let literal = js_code_getter_literal(code, f_name);
  let none = equal(literal, "");
  if (none) {
    return null;
  }
  return literal;
}
