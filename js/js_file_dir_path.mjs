import { arguments_assert } from "./arguments_assert.mjs";
import { js_file_name } from "./js_file_name.mjs";
import { path_join } from "./path_join.mjs";
export function js_file_dir_path(dir, f_name) {
  arguments_assert(arguments, 2);
  ("where a function of this name sits inside a flat folder of modules");
  ("the hermetic core of every folder verb opens by working this out, and each one worked it out in two steps of its own.");
  let name = js_file_name(f_name);
  let path = path_join([dir, name]);
  return path;
}
