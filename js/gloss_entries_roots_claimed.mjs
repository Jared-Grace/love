import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
export function gloss_entries_roots_claimed(entries) {
  "Every root the explanations in one passage name in so many words, in the order they name them.";
  "An explanation that names its root some other way contributes nothing here, which is the honest answer rather than a guess. So this is a floor on what the corpus claims and never a ceiling, and a question it can only answer one way - did anybody write this - must be read as such.";
  "$plain entries";
  "they name a passage's explanations to read, never anything that runs.";
  let explain_key = gloss_entry_explain_key();
  let claimed = [];
  function entry_read(entry) {
    let explain = property_get(entry, explain_key);
    let roots = gloss_explain_roots_claimed(explain);
    list_add_multiple(claimed, roots);
  }
  each(entries, entry_read);
  return claimed;
}
