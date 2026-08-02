import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_paths_names } from "./baseline_paths_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
export async function baselines_unwatched() {
  arguments_assert(arguments, 0);
  ("Every ratchet whose record nothing in the repo-wide gate ever opens.");
  ("A ratchet is a debt queue that only shrinks, and the whole of that promise rests");
  ("on one gate reading the record every run. A record nobody reads keeps the debt");
  ("without keeping the promise: the offenses in it are no longer refused, and a new");
  ("one can be written in beside them with nothing to say so. It looks exactly like");
  ("a ratchet that is being paid down, which is why it needs finding rather than");
  ("remembering.");
  ("Reachability is asked rather than a list of gates, because the question is");
  ("whether the record gets opened at all, not which gate opens it. A ratchet");
  ("watched from inside another gate's sweep is watched.");
  let path_names = await baseline_paths_names();
  let f_name = fn_name("qa_gate_run");
  let reachable = await function_reachable_names(f_name);
  let unwatched = list_without_multiple(path_names, reachable);
  return unwatched;
}
