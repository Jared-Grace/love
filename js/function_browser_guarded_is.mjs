import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_read } from "./file_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_includes } from "./text_includes.mjs";
export async function function_browser_guarded_is(f_name) {
  "True when this function asks whether it is running in a browser, which is how a file that reaches for a Node built-in still has something to offer the browser. Reading a chain of calls, this is the one that says where the chain stops being a problem.";
  "The path is searched for across every repo rather than assumed to be this one, because an entry point can live in a sibling repo and the question about it is the same question. Assuming one repo turned that case into a file-not-found rather than an answer.";
  let search = await function_name_to_path_search(f_name);
  let f_path = property_get(search, "f_path");
  let code = await file_read(f_path);
  let guard = fn_name("browser_is");
  let guarded = text_includes(code, guard);
  return guarded;
}
