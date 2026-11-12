import { arguments_assert } from "./arguments_assert.mjs";
import { g_sermon_loop_folder } from "./g_sermon_loop_folder.mjs";
import { path_join } from "./path_join.mjs";
export function g_sermon_sweep_path() {
  arguments_assert(arguments, 0);
  ("Where the proposed rewordings of already-written verses wait to be said yes or no to: one list of entries, each naming a chapter code, a verse key, the lines it would put in place, and the decision once one is made.");
  let folder = g_sermon_loop_folder();
  let path = path_join([folder, "sweep.json"]);
  return path;
}
