import { list_map_property } from "./list_map_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { entries_versus_baseline } from "./entries_versus_baseline.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  ("the sentence saying so is the one the flat ratchet already gives, and thirteen");
  ("gates now say it the same way.");
  let recorded = await baseline_known_read(path);
  let change = entries_versus_baseline(offenders, recorded, fields);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  entries_print(added, "NEW    ");
  entries_print(stale, "GONE   ");
  ("The names alone go in the message, not the entries. A gate inside the whole-repo");
  ("run only gets its message read, so it has to carry who offended - but the offending");
  ("names beside each one are already printed above, and repeating every field there");
  ("buries the list it was meant to hand over.");
  let added_names = list_map_property(added, "name");
  list_empty_is_assert_json(added_names, {
    hint,
  });
  let stale_names = list_map_property(stale, "name");
  list_empty_is_assert_json(stale_names, {
    hint: text_combine_multiple([
      "these no longer offend - shrink the record with ",
      name_write,
      " so the same name cannot come back unnoticed",
    ]),
  });
  let r = {
    added: 0,
    stale: 0,
  };
  return r;
}
