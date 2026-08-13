import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
export function gloss_passage_word_explains_set(passage, explains) {
  "Give every explanation in one passage that is about a named word the wording written for that word, and answer with the words it rewrote.";
  "The same word is explained again at every place it stands, so one word's wording is written over as many entries as the passage holds of it. That is deliberate: an explanation that says the reader should look further up is the one failure the method note names as worst, and repeating a whole sentence is what it asks for instead.";
  "A word nobody has written a wording for is left exactly as it was, so a partly written set can be applied without harming what it says nothing about.";
  let entries = gloss_passage_entries(passage);
  if (list_empty_is(entries)) {
    let none = [];
    return none;
  }
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let changes = [];
  function entry_set(entry) {
    let word = property_get(entry, word_key);
    let wording = property_get_or_null(explains, word);
    if (null_is(wording)) {
      return;
    }
    let explain = property_get(entry, explain_key);
    let same = equal(explain, wording);
    if (same) {
      return;
    }
    property_set(entry, explain_key, wording);
    list_add(changes, word);
  }
  each(entries, entry_set);
  let none_changed = list_empty_is(changes);
  if (none_changed) {
    return changes;
  }
  let value = json_format_to(entries);
  property_set(passage, "generated", value);
  return changes;
}
