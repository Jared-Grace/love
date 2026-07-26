import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_read } from "./file_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_includes } from "./text_includes.mjs";
export async function function_browser_guarded_is(f_name) {
  "True when this function asks whether it is running in a browser, which is how a file that reaches for a Node built-in still has something to offer the browser. Reading a chain of calls, this is the one that says where the chain stops being a problem.";
  let f_path = await function_name_to_path(f_name);
  let code = await file_read(f_path);
  let guard = fn_name("browser_is");
  let guarded = text_includes(code, guard);
  return guarded;
}
