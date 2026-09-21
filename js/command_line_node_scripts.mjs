import { log_keep } from "./log_keep.mjs";
import { command_line_stdout } from "./command_line_stdout.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { module_dirname } from "./module_dirname.mjs";
import { path_directory } from "./path_directory.mjs";
import { path_join } from "./path_join.mjs";
export async function command_line_node_scripts(script_name, f_name, args) {
  ("The script is named absolute from the folder this module stands in, so the child can be started from whatever tree the caller stands in. A relative scripts path stops being anything the moment the watcher stands in another repo, and saving a file in one tree only to have the transform answered from another is the failure this naming is here to end.");
  let here = await module_dirname(import.meta);
  let tools = path_directory(here);
  let script = path_join([tools, "scripts", text_combine(script_name, ".mjs")]);
  let result = list_join_space(args);
  let stdout = await command_line_stdout(
    text_combine_multiple(["node ", script, " ", f_name, " ", result]),
  );
  log_keep(command_line_node_scripts.name, stdout);
}
