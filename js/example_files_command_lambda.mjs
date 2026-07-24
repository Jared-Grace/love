import { function_rename } from "./function_rename.mjs";
import { js_identifiers_rename_dir } from "./js_identifiers_rename_dir.mjs";
("Map a multi-file example's fn to a directory transform (dir)=>void run in a sandbox");
("temp dir. function_rename is repo-wide/ambient, so the gate proves its behavior-");
("preserving CROSS-FILE core via the hermetic js_identifiers_rename_dir.");
export function example_files_command_lambda(fn_name, args) {
  if (fn_name === function_rename.name) {
    function lambda(dir) {
      return js_identifiers_rename_dir(dir, args[0], args[1]);
    }
    return lambda;
  }
  return null;
}
