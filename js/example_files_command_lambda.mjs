import { function_rename } from "./function_rename.mjs";
import { js_identifiers_rename_dir } from "./js_identifiers_rename_dir.mjs";
import { function_delete_unused } from "./function_delete_unused.mjs";
import { js_identifier_delete_unused_dir } from "./js_identifier_delete_unused_dir.mjs";
import { function_copy } from "./function_copy.mjs";
import { js_identifier_copy_dir } from "./js_identifier_copy_dir.mjs";
("Map a multi-file example's fn to a directory transform (dir)=>void run in a sandbox");
("temp dir. function_rename / function_delete_unused / function_copy are repo-wide/ambient,");
("so the gate proves their CROSS-FILE core via the hermetic js_identifier(s)_*_dir cores.");
export function example_files_command_lambda(fn_name, args) {
  if (fn_name === function_rename.name) {
    function lambda(dir) {
      return js_identifiers_rename_dir(dir, args[0], args[1]);
    }
    return lambda;
  }
  if (fn_name === function_delete_unused.name) {
    function lambda(dir) {
      return js_identifier_delete_unused_dir(dir, args[0]);
    }
    return lambda;
  }
  if (fn_name === function_copy.name) {
    function lambda(dir) {
      return js_identifier_copy_dir(dir, args[0], args[1]);
    }
    return lambda;
  }
  return null;
}
