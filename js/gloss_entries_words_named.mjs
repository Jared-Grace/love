import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get } from "./property_get.mjs";
import { text_punctuation_edges_removed } from "./text_punctuation_edges_removed.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_entries_words_named(entries) {
  "Every explanation in one passage, named beside the word it explains and the same word spelled bare.";
  "This is the unfiltered twin of the sweep that keeps only the words wearing a mark, and it exists because a question about what the store holds twice cannot be asked of the marked words alone. Whether a marked spelling is a doubling or the store's only spelling of that word is settled by the clean spellings, so the clean ones have to be carried too.";
  "The bare spelling is worked out here and carried along rather than being left to whoever reads the finding, for the same reason its twin does it: that spelling is the one every dictionary and every grouping is keyed by, and working it out once beside the word it came from is what stops two readers disagreeing about what bare means.";
  arguments_assert(arguments, 1);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let named = [];
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let bare = text_punctuation_edges_removed(word);
    let explain = property_get(entry, explain_key);
    let finding = {
      word,
      bare,
      explain,
    };
    list_add(named, finding);
  }
  each(entries, entry_read);
  return named;
}
