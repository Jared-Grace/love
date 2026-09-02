import { baseline_writers_growth_exempt } from "./baseline_writers_growth_exempt.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { baseline_writers_names } from "./baseline_writers_names.mjs";
import { exemption_entries_dead } from "./exemption_entries_dead.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { function_imports } from "./function_imports.mjs";
import { baseline_growth_guarded_is } from "./baseline_growth_guarded_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function baseline_writers_growth_exempt_dead() {
  "The written excuses for a ratchet writer being allowed to record growth that no longer excuse anything, and the ones that never argued for themselves.";
  "The sweep beside this one is read off the files: the family of writers comes from their shape and the refusal comes from what each one imports, so neither can drift. The excuses are hand typed, and they are the only part of the check that can go on being believed after it stops being true.";
  "Two of the three faults are what any let-off list can carry and are asked next door. The third belongs to this list alone: a writer whose imports now refuse growth is being excused from a rule it already keeps, so the let-off is the wrong half rather than the writing.";
  "What a dead excuse costs, read off the sweep rather than assumed. The sweep walks the writers and skips an excused name, so a name no writer answers to is never reached and takes nothing off the answer today. A contradicted one is worse than idle: it is being kept alive by a refusal it does not know about, and on the day that writer drops its guard the excuse silently hides a real offender rather than letting the gate say so.";
  let exempt = baseline_writers_growth_exempt();
  let excused = list_map_property(exempt, "f_name");
  let names = await baseline_writers_names();
  let dead = exemption_entries_dead(exempt, excused, names);
  let contradicted = [];
  for (let f_name of excused) {
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
  let r = {
    excused: dead.excused,
    writers: list_size(names),
    stale: dead.stale,
    contradicted,
    unreasoned: dead.unreasoned,
  };
  return r;
}
