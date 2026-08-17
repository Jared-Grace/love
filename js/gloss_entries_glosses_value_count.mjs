import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { gloss_entry_gloss_key } from "./gloss_entry_gloss_key.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_entries_glosses_value_count(entries, value) {
  "How many words of a passage carry a named wording, exactly and entirely, as the short English standing under them.";
  "$plain value";
  "the value is a wording to match. It names text to read and nothing that runs.";
  "The whole wording has to be the named one rather than merely contain it, because what this is asked about is a marker standing where a meaning belongs. A dash inside a real gloss is a dash inside a real gloss, and counting it would report a page as broken in the places it is working.";
  let key = gloss_entry_gloss_key();
  let count = 0;
  function entry_read(entry) {
    let gloss = property_get(entry, key);
    let same = equal(gloss, value);
    if (same) {
      count = count + 1;
    }
  }
  each(entries, entry_read);
  return count;
}
