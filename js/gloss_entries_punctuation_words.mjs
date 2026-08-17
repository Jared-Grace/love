import { each } from "./each.mjs";
import { gloss_entry_word_is } from "./gloss_entry_word_is.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_entries_punctuation_words(entries) {
  "The marks in one passage's explanations that were explained as though they were words - a full stop, a comma, a closing quote standing alone with an explanation of its own.";
  "This asks the same question the repair asks and answers with what it would drop, so a gate can say a store is clean without having to write to it first. The one place either of them decides what counts as a mark is the same one.";
  "The mark itself is reported rather than a count, because the marks say where they came from: a run of full stops and semicolons reads as sentence ends being cut as words, and a run of closing quotes reads as speech being cut, which are two different faults in whatever wrote them.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let marks = [];
  function entry_read(entry) {
    let wordy = gloss_entry_word_is(entry);
    if (wordy) {
      return;
    }
    let word = property_get(entry, word_key);
    list_add(marks, word);
  }
  each(entries, entry_read);
  return marks;
}
