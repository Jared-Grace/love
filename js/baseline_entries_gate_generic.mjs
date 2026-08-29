import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { entries_versus_baseline } from "./entries_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
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
  ("Both teeth are complained about in one refusal, for the reason the flat ratchet gives at length: refusing on the new names and stopping there hides the left-behind ones for as long as anything new offends, and printing them a few lines above does not reach a reader who only ever sees the message a failing gate carried out of a whole-repo run.");
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
  let stale_names = list_map_property(stale, "name");
  let sentences = [];
  let added_any_is = list_empty_not_is(added_names);
  if (added_any_is) {
    list_add(sentences, hint);
  }
  let stale_any_is = list_empty_not_is(stale_names);
  if (stale_any_is) {
    let hint_stale = text_combine_multiple([
      "these no longer offend - shrink the record with ",
      name_write,
      " so the same name cannot come back unnoticed",
    ]);
    list_add(sentences, hint_stale);
  }
  let hint_both = list_join_newline(sentences);
  let both = list_concat(added_names, stale_names);
  list_empty_is_assert_json(both, {
    hint: hint_both,
    added: added_names,
    stale: stale_names,
  });
  let r = {
    added: 0,
    stale: 0,
  };
  return r;
}
