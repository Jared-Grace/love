import { property_list_first } from "./property_list_first.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_word_met_note } from "./gloss_word_met_note.mjs";
export function gloss_passages_pointers_mets(passages, lambda$pointer_is) {
  "For every explanation in a chapter that sends the reader back to a word they have met, the note of where they last met it - or nothing, where they never did.";
  "$plain passages";
  "the passages are the whole chapter in reading order, which is what lets the nearest earlier explanation be known at the moment each pointing sentence is reached.";
  "This is the one walk down the chapter. Whatever else wants to know about the pointing sentences - whether they can be addressed, or why not, or where the explanations they catch are lying - asks it here and reads its answer, so no two of those can disagree about which sentences they were even talking about.";
  "A note is replaced rather than changed when the word is met again, so a note handed out here keeps saying what it said at the moment it was handed out.";
  let key = gloss_entry_explain_key();
  let said = {};
  let mets = [];
  for (let passage of passages) {
    let text = property_list_first(passage, "verse_numbers");
    let verse = number_from_text(text);
    let entries = gloss_passage_entries(passage);
    for (let entry of entries) {
      let explain = property_get_or_null(entry, key);
      let written = null_not_is(explain);
      if (written) {
        let word = gloss_entry_word_read(entry);
        let folded = text_lower_to(word);
        let pointer = lambda$pointer_is(explain);
        if (pointer) {
          let met = property_get_or_null(said, folded);
          list_add(mets, met);
        } else {
          gloss_word_met_note(said, folded, word, explain, verse);
        }
      }
    }
  }
  return mets;
}
