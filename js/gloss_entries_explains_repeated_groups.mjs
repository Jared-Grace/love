import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_map } from "./list_map.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
export function gloss_entries_explains_repeated_groups(entries) {
  "Every explanation in a list that some other word in the same list was given word for word, each one carried beside the words that were handed it.";
  "The counter next door says how many words share a wording and nothing about which. That is the right answer for a gate, which only has to decide, and the wrong one for a person about to rewrite a sentence - they need to see the words standing under it, because whether the wording was lazy or genuinely the same fact is a judgment nobody can make without them.";
  "An explanation nobody has written yet is dropped rather than gathered under the empty wording, which would otherwise read as the single largest repetition in every store and would be about nothing.";
  let key = gloss_entry_explain_key();
  function explain_written_is(entry) {
    let explain = property_get_or_null(entry, key);
    let written_found = null_not_is(explain);
    return written_found;
  }
  let written = list_filter(entries, explain_written_is);
  let grouped = list_group_by_property(written, key);
  function group_shared_is(group) {
    let items = property_get(group, "items");
    let size = list_size(items);
    let shared = greater_than(size, 1);
    return shared;
  }
  let repeated = list_filter(grouped, group_shared_is);
  function group_read(group) {
    let explain = property_get(group, "key");
    let items = property_get(group, "items");
    let words = list_map(items, gloss_entry_word_read);
    let r = {
      explain,
      words,
    };
    return r;
  }
  let groups = list_map(repeated, group_read);
  return groups;
}
