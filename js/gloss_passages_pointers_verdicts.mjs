import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_same_as_verdict } from "./gloss_same_as_verdict.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_word_met_note } from "./gloss_word_met_note.mjs";
export function gloss_passages_pointers_verdicts(passages, lambda$pointer_is) {
  "One plain sentence for every explanation in a chapter that sends the reader back to a word they have met - saying why it could not be given an address, or that it was addressed.";
  "$plain passages";
  "the passages are the whole chapter in reading order, which is what lets the nearest earlier explanation be known at the moment each pointing sentence is reached.";
  "This walks the chapter exactly as the writing of addresses walks it, and asks the same question of the same judge, so the count it gives is a count of what that writing did and not of something near it.";
  let key = gloss_entry_explain_key();
  let said = {};
  let verdicts = [];
  for (let passage of passages) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let text = list_first(verse_numbers);
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
          let verdict = gloss_same_as_verdict(passages, met);
          let allowed = equal(verdict, "");
          if (allowed) {
            list_add(verdicts, "addressed");
          } else {
            list_add(verdicts, verdict);
          }
        } else {
          gloss_word_met_note(said, folded, word, explain, verse);
        }
      }
    }
  }
  return verdicts;
}
