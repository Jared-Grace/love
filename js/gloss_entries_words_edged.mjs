import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_entry_word_edged_is } from "./gloss_entry_word_edged_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_punctuation_edges_removed } from "./text_punctuation_edges_removed.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_entries_words_edged(entries) {
  "The explanations in one passage whose word wears a mark from the sentence around it, each named beside the same word spelled bare.";
  "The bare spelling is worked out here and carried along rather than being left for whoever reads the finding, because that is the spelling the dictionary is keyed by and the whole reason for gathering these is that nothing ever asks it under one.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let edged = [];
  function entry_read(entry) {
    let marked = gloss_entry_word_edged_is(entry);
    let clean = not(marked);
    if (clean) {
      return;
    }
    let word = property_get(entry, word_key);
    let bare = text_punctuation_edges_removed(word);
    let explain = property_get(entry, explain_key);
    let finding = {
      word,
      bare,
      explain,
    };
    list_add(edged, finding);
  }
  each(entries, entry_read);
  return edged;
}
