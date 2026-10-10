import { functions_command_seams } from "./functions_command_seams.mjs";
import { functions_code_overwrite_seams } from "./functions_code_overwrite_seams.mjs";
import { functions_permission_seams } from "./functions_permission_seams.mjs";
import { functions_dispatch_seams } from "./functions_dispatch_seams.mjs";
import { fn_name } from "./fn_name.mjs";
export function functions_parameters_dangerous() {
  "Which arguments of each dangerous function decide what it does to the machine: the word all, or the positions that count.";
  "A command runner, an evaluator, the code overwriter, the permission writers and the dispatchers are steered by every argument they take, so all of them count. A writer, a mover or a deleter is steered only by where it lands: what it writes into a file it chose itself cannot reach anything, so only the path positions count. The copiers and movers count their source as well, because a source picked from outside would carry a secret into the repo, and the repo is published.";
  "This is what lets a lesson feed text into a manifest without being refused for it: the text lands in the contents, and the contents are not a position that counts.";
  "A map, so a name is never read as one of an object's own keys.";
  let dangerous = new Map();
  let everything = [
    ...functions_command_seams(),
    ...functions_code_overwrite_seams(),
    ...functions_permission_seams(),
    ...functions_dispatch_seams(),
  ];
  for (let name of everything) {
    dangerous.set(name, "all");
  }
  dangerous.set(fn_name("file_overwrite_uncached"), [0]);
  dangerous.set(fn_name("file_overwrite_buffer"), [0]);
  dangerous.set(fn_name("file_overwrite_json"), [0]);
  dangerous.set(fn_name("file_copy_overwrite"), [0, 1]);
  dangerous.set(fn_name("file_move"), [0, 1]);
  dangerous.set(fn_name("file_delete"), [0]);
  dangerous.set(fn_name("folder_delete"), [0]);
  dangerous.set(fn_name("folder_copy_fresh"), [0, 1, 2]);
  dangerous.set(fn_name("qa_snapshot_link"), [0, 1]);
  return dangerous;
}
