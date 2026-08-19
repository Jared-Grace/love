import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { binisaya_affixes_plain_kinds } from "./binisaya_affixes_plain_kinds.mjs";
import { each } from "./each.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_explain_affix_kinds_unsupported } from "./gloss_explain_affix_kinds_unsupported.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_entries_affix_kinds_wrong(entries, known) {
  "The explanations in one passage that call a piece of their word by a name the dictionary gives no piece of.";
  "A word that opens its sentence is asked for under both spellings, because the dictionary is keyed by the spelling each word wore where it was gathered. Asked under one spelling only, this check simply never looked at the words a sentence begins with.";
  "A word the dictionary says nothing about, or takes apart in a shorthand nobody here has read, is passed over rather than judged. Neither was ever told to the explaining machine, so an explanation of one is its own guess and this is not the place that guessing is answered - the sentence beside the list already tells it to say nothing it is not certain of.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let wrong = [];
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let held = binisaya_words_known_get(known, word);
    if (null_is(held)) {
      return;
    }
    let analysed = property_get(held, "analysed");
    if (not(analysed)) {
      return;
    }
    let affixes = property_get(held, "affixes");
    let given = binisaya_affixes_plain_kinds(affixes);
    let unread = list_empty_is(given);
    if (unread) {
      return;
    }
    let explain = property_get(entry, explain_key);
    let said = gloss_explain_affix_kinds_unsupported(explain, given);
    let none = list_empty_is(said);
    if (none) {
      return;
    }
    let root = property_get(held, "root");
    let finding = {
      word,
      root,
      affixes,
      given,
      said,
      explain,
    };
    list_add(wrong, finding);
  }
  each(entries, entry_read);
  return wrong;
}
