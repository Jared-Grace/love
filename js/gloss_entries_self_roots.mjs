import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { each } from "./each.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_explain_self_root_is } from "./gloss_explain_self_root_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_entries_self_roots(entries) {
  "The explanations in one passage that give their own word as the root it is built from.";
  "No dictionary is consulted for this one. A word being given as its own origin is wrong on its own terms, whatever any dictionary says about it, so this can be asked of a chapter whose vocabulary nobody has looked up yet.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let found = [];
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let explain = property_get(entry, explain_key);
    let self_root = gloss_explain_self_root_is(word, explain);
    if (not(self_root)) {
      return;
    }
    let finding = {
      word,
      explain,
    };
    list_add(found, finding);
  }
  each(entries, entry_read);
  return found;
}
