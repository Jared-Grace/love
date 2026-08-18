import { each_index } from "./each_index.mjs";
import { gloss_entry_gloss_key } from "./gloss_entry_gloss_key.mjs";
import { gloss_placeholder_glosses } from "./gloss_placeholder_glosses.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_entries_placeholder_marked(entries) {
  "Every word of one passage whose short English is a marker rather than a meaning, each carried back with where it stands, the word itself, the marker found, and the prose written beside it.";
  "Where it stands is the part that has to travel, because that is how the new short English is handed back in - matched by standing rather than by the word, since the same word stands many times in a passage.";
  "The prose travels with it because that is usually where the meaning already is. An author who left a marker under a word still explained the word underneath it, so the mending is most often a reading of the sentence already written rather than a fresh judgment about the Greek.";
  let key = gloss_entry_gloss_key();
  let markers = gloss_placeholder_glosses();
  let marked = [];
  function entry_read(entry, index) {
    let gloss = property_get(entry, key);
    let marker_is = list_includes(markers, gloss);
    if (not(marker_is)) {
      return;
    }
    let word = property_get(entry, "word");
    let explain = property_get(entry, "explain");
    list_add(marked, {
      index,
      word,
      gloss,
      explain,
    });
  }
  each_index(entries, entry_read);
  return marked;
}
