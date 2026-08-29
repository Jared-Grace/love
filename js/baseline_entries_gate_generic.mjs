import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { entries_versus_baseline } from "./entries_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { baseline_change_refuse } from "./baseline_change_refuse.mjs";
export async function baseline_entries_gate_generic(
  offenders,
  path,
  fields,
  entries_print,
  hint,
  name_write,
) {
  arguments_assert(arguments, 6);
  ("Run a gate that measures a list of names per function against what the repo");
  ("already carried, and refuse both of the ways that can go wrong.");
  ("The sibling of the flat-list ratchet, and the same gate in every respect but the");
  ("shape of what it counts. There an offense is a name; here it is a function with a");
  ("list of names hanging off it, so what changed has to be read list by list rather");
  ("than name by name, and a reader wants the offending names printed beside the");
  ("function rather than a bare count.");
  ("Everything else is deliberately not a choice. A gate that checked only for growth");
  ("would be a ratchet with one tooth, and an entry left behind after a cleanup");
  ("quietly lets the same offense come back under cover of being already known - so");
  ("the refusing itself is the one the flat ratchet already does, and thirteen gates");
  ("now say it the same way.");
  let recorded = await baseline_known_read(path);
  let change = entries_versus_baseline(offenders, recorded, fields);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  entries_print(added, "NEW    ");
  entries_print(stale, "GONE   ");
  ("The names alone go on to be refused, not the entries. A gate inside the whole-repo");
  ("run only gets its message read, so it has to carry who offended - but the offending");
  ("names beside each one are already printed above, and repeating every field there");
  ("buries the list it was meant to hand over. Handing over names is also what lets the");
  ("two ratchets refuse through the same unit at all.");
  let added_names = list_map_property(added, "name");
  let stale_names = list_map_property(stale, "name");
  ("The sentence about the new names is the same every time here, so what is handed over is a maker that returns it - the shape the sibling needs, and the shorter thing to write where nothing has to be worked out.");
  function hint_get() {
    return hint;
  }
  let r = await baseline_change_refuse(
    added_names,
    stale_names,
    hint_get,
    name_write,
  );
  return r;
}
