import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function gloss_entries_names_rooted(entries, capitalised) {
  "The explanations in one passage that tell a reader what a name is built from, where the name is a word the book never once writes in small letters.";
  "A name carried over from another language is built from nothing in this one, so an explanation that takes one apart is telling the reader something that is not so. The shape of the name is exactly what makes the mistake easy: a place name spelled like a built Cebuano word comes apart under the same rules a real word does, and the answer reads no differently from a true one.";
  "It reports a place to look and never a verdict. An explanation saying plainly that a name has no root would be counted here too, because both are found by the same word appearing in the prose, and the explanation is handed back beside the name so a reader settles it in one glance rather than opening the store.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let found = [];
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let key = text_lower_to(word);
    let named = property_exists(capitalised, key);
    if (not(named)) {
      return;
    }
    let explain = property_get(entry, explain_key);
    let explain_lower = text_lower_to(explain);
    let claimed = text_includes(explain_lower, "root");
    if (not(claimed)) {
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
