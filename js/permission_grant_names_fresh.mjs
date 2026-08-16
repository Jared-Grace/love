import { file_read_uncached } from "./file_read_uncached.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { js_fn_name_literals } from "./js_fn_name_literals.mjs";
import { js_parse_async } from "./js_parse_async.mjs";
import { folder_js } from "./folder_js.mjs";
import { fn_name } from "./fn_name.mjs";
export async function permission_grant_names_fresh() {
  "the granted function names as the file on disk spells them at this moment, rather than as this process loaded them when it started";
  "the list is read from the file's own text because the ordinary way of asking - calling the generated function - is answered from memory. A module is loaded once per process however many times the file underneath it is rewritten, so a run that reads the names, spends a minute deciding something, and then writes them back has written a minute-old list over whatever landed in between.";
  "that minute is not idle time. Every name a batch has not already got a rule for is put through a safety check that walks the whole repo, and it has to be, because what it is deciding is whether a standing approval may be given at all. So the window between reading the list and writing it is as wide as the check is slow, and it is at its widest exactly when the most names are being added.";
  "the names are taken from the marker calls rather than from a list literal, because the marker is what makes a spelled name a reference the rename follows - so this reads the file the same way every other reader of a spelled name does, and a change to how the file is rendered cannot quietly mean something different here.";
  let f_name = fn_name("permission_grant_names");
  let dir = folder_js();
  let path = js_file_dir_path(dir, f_name);
  let code = await file_read_uncached(path);
  let ast = await js_parse_async(code);
  let names = js_fn_name_literals(ast, f_name);
  return names;
}
