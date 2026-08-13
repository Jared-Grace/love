import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_explain_back_reference_is } from "./gloss_explain_back_reference_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_entries_back_references(entries) {
  "The explanations in one passage that point the reader further up instead of saying the thing themselves.";
  "The word is reported beside the wording, because the same few words carry most of these and a reader wants to know which words are owed an explanation rather than how many sentences are wrong.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let pointing = [];
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let explain = property_get(entry, explain_key);
    let back = gloss_explain_back_reference_is(explain);
    if (not(back)) {
      return;
    }
    let finding = {
      word,
      explain,
    };
    list_add(pointing, finding);
  }
  each(entries, entry_read);
  return pointing;
}
