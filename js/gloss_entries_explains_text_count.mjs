import { each } from "./each.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
export function gloss_entries_explains_text_count(entries, text) {
  "How many of a passage's word explanations say a named piece of text somewhere in their wording.";
  "$plain text";
  "the text is a run of letters to look for. It names words to read and nothing that runs.";
  "It counts the explanations rather than the sayings, because an explanation is the unit that gets rewritten - two mentions inside one explanation are still one piece of work, and counting them twice would say there is twice as much left to do.";
  let key = gloss_entry_explain_key();
  let count = 0;
  function entry_read(entry) {
    let explain = property_get(entry, key);
    let found = text_includes(explain, text);
    if (found) {
      count = count + 1;
    }
  }
  each(entries, entry_read);
  return count;
}
