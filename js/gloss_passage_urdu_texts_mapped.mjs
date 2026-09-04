import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal_not } from "./equal_not.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_entry_gloss_key } from "./gloss_entry_gloss_key.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { gloss_passage_entries_set } from "./gloss_passage_entries_set.mjs";
export function gloss_passage_urdu_texts_mapped(passage, lambda_text) {
  "How many pieces of writing in one passage of a chapter of explained words were changed by running the given mapping over them, having changed them in the passage itself.";
  "Only the two things this repository wrote are reached: the short Urdu standing for the English word, and the longer Urdu explaining it. Everything else in the passage is left exactly as it is, and the reason is the verse. The verse belongs to whoever translated it, and a mapping that improves our own words has no business rewriting somebody else's scripture on the way past. That is the whole difference between this and mapping every piece of writing in the file, which is what the words with the missing spaces needed and what a name must never get.";
  "The passage is only written back into when something actually changed, so a chapter nobody has a ruling about is left byte for byte as it was found rather than being taken apart and put back together.";
  let entries = gloss_passage_entries(passage);
  let changed = [];
  function entry_key_map(entry, key) {
    let before = property_get_or_null(entry, key);
    let absent = null_is(before);
    if (absent) {
      return;
    }
    let after = lambda_text(before);
    let differs = equal_not(before, after);
    if (differs) {
      property_set(entry, key, after);
      list_add(changed, after);
    }
  }
  function entry_map(entry) {
    let r = gloss_entry_gloss_key();
    entry_key_map(entry, r);
    let r2 = gloss_entry_explain_key();
    entry_key_map(entry, r2);
  }
  list_map(entries, entry_map);
  let count = list_size(changed);
  let none = equal(count, 0);
  if (none) {
    return count;
  }
  gloss_passage_entries_set(passage, entries);
  return count;
}
