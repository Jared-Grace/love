import { baseline_writers_growth_exempt } from "./baseline_writers_growth_exempt.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { baseline_writers_names } from "./baseline_writers_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { function_imports } from "./function_imports.mjs";
import { baseline_growth_guarded_is } from "./baseline_growth_guarded_is.mjs";
import { list_size } from "./list_size.mjs";
export async function baseline_writers_growth_exempt_dead() {
  "The written excuses for a ratchet writer being allowed to record growth that no longer excuse anything, and the ones that never argued for themselves.";
  "The sweep beside this one is read off the files: the family of writers comes from their shape and the refusal comes from what each one imports, so neither can drift. The excuses are hand typed, and they are the only part of the check that can go on being believed after it stops being true.";
  "Three ways one is worth nothing, wanting different repairs. A name belonging to no ratchet writer at all is left over from a deletion or a rename. A name whose writer now imports a refusal is being excused from a rule it already keeps, so the let-off is the wrong half rather than the writing. An entry carrying no reason is a let-off nobody argued for, which is the whole of what the list was supposed to cost.";
  "What a dead excuse costs, read off the sweep rather than assumed. The sweep walks the writers and skips an excused name, so a name no writer answers to is never reached and takes nothing off the answer today. The cost is later and it differs by kind. A stale name is a standing let-off waiting on a name, so a writer written under it afterwards is excused from the moment it exists without anybody arguing for it. A contradicted one is worse than idle: it is being kept alive by a refusal it does not know about, and on the day that writer drops its guard the excuse silently hides a real offender rather than letting the gate say so.";
  "Both counts are handed back beside the faults because each fault is a subtraction or a walk over the same list, and either one drawn from nothing gives the same empty answer as a repo in good order.";
  let exempt = baseline_writers_growth_exempt();
  let excused = list_map_property(exempt, "f_name");
  let names = await baseline_writers_names();
  let stale = list_difference(excused, names);
  let contradicted = [];
  let unreasoned = [];
  for (let entry of exempt) {
    let f_name = property_get(entry, "f_name");
    let why = property_get(entry, "why");
    if (not(why)) {
      list_add(unreasoned, f_name);
    }
    let known = list_includes(names, f_name);
    if (not(known)) {
      continue;
    }
    let imports = await function_imports(f_name);
    let guarded = baseline_growth_guarded_is(imports);
    if (guarded) {
      list_add(contradicted, f_name);
    }
  }
  let dead = {
    excused: list_size(excused),
    writers: list_size(names),
    stale,
    contradicted,
    unreasoned,
  };
  return dead;
}
