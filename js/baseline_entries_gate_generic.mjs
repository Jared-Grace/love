import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { entries_versus_baseline } from "./entries_versus_baseline.mjs";
import { entries_names_text } from "./entries_names_text.mjs";
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
  let added_names = entries_names_text(added);
  list_empty_is_assert_json(added, {
    hint,
    added: added_names,
  });
  let stale_names = entries_names_text(stale);
  list_empty_is_assert_json(stale, {
    hint: text_combine_multiple([
      "these no longer offend - shrink the record with ",
      name_write,
      " so the same name cannot come back unnoticed",
    ]),
    stale: stale_names,
  });
  let r = {
    added: 0,
    stale: 0,
  };
  return r;
}
