import { baseline_writers_names } from "./baseline_writers_names.mjs";
import { baseline_abstain_sources } from "./baseline_abstain_sources.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { function_imports } from "./function_imports.mjs";
import { baseline_abstain_guarded_is } from "./baseline_abstain_guarded_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function baseline_writers_abstain_unguarded() {
  "audit: every ratchet writer whose reading can come back empty because it reached nothing, without first refusing to write from a reading like that";
  "a ratchet may only shrink, and shrinking is what a writer does with an empty answer. so a reading that comes back empty because the drive was out, or because the network was, rewrites the record to hold nothing - and every name the gate was watching is forgotten in the one direction nothing downstream is allowed to complain about. measured the day this was written: the drive went out partway through a session and the record of folders left behind under dead names was one call away from being emptied by a reading that never looked at anything";
  "the risk is asked of everything the writer can reach, however far down, because the reading it writes from is usually several functions away and the writer itself touches no disk of its own. the refusal is asked of its own imports, because a writer that only reaches a refusal through three other functions is not refusing anything itself - the same split its neighbour makes about growth, for the same reason";
  "this comes back empty on a healthy repo, so on its own it could never tell a working judgment from a broken one. what counts as refusing lives next door, handed a plain list of names, so a corpus can hand it sets nobody has written";
  let names = await baseline_writers_names();
  let sources = baseline_abstain_sources();
  let offenders = [];
  for (let f_name of names) {
    let reachable = await function_reachable_names(f_name);
    let reached = list_intersect(sources, reachable);
    let exposed = list_empty_not_is(reached);
    if (not(exposed)) {
      continue;
    }
    let imports = await function_imports(f_name);
    let guarded = baseline_abstain_guarded_is(imports);
    if (guarded) {
      continue;
    }
    list_add(offenders, {
      f_name,
      reached,
    });
  }
  return offenders;
}
