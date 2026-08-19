import { gloss_explains_word_wording } from "./gloss_explains_word_wording.mjs";
import { gloss_passage_entries_changed_set } from "./gloss_passage_entries_changed_set.mjs";
import { not } from "./not.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function gloss_passage_word_explains_set(
  passage,
  explains,
  lambda$explain,
) {
  "Give every explanation in one passage that is about a named word, and that the caller is willing to write over, the wording written for that word - answering with the words it rewrote.";
  "The same word is explained again at every place it stands, so one word's wording is written over as many entries as the passage holds of it. That is deliberate: an explanation that says the reader should look further up is the one failure the method note names as worst, and repeating a whole sentence is what it asks for instead.";
  "A word nobody has written a wording for is left exactly as it was, so a partly written set can be applied without harming what it says nothing about.";
  "The word a sentence opens with is the same word, so a capital does not hide it from the wording written for it.";
  "Which of the wordings already there may be written over is asked rather than assumed, because the two cases are not the same and the difference cannot be undone. A word whose every explanation is a pointer further up has nothing to lose. A word standing a thousand times, of which some hundreds point further up and the rest were written for the sentence they sit in, would lose those hundreds silently - and no reading afterwards could tell they had ever been written.";
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
    let wording = gloss_explains_word_wording(explains, word);
    if (null_is(wording)) {
      return;
    }
    let explain = property_get(entry, explain_key);
    let same = equal(explain, wording);
    if (same) {
      return;
    }
    let replaceable = lambda$explain(explain);
    if (not(replaceable)) {
      return;
    }
    property_set(entry, explain_key, wording);
    list_add(changes, word);
  }
  each(entries, entry_set);
  let r = gloss_passage_entries_changed_set(passage, entries, changes);
  return r;
}
