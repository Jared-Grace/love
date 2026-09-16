import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { gloss_same_as_verse_read } from "./gloss_same_as_verse_read.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_verse_holds_is } from "./gloss_passage_verse_holds_is.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { equal } from "./equal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_entry_same_as_read } from "./gloss_entry_same_as_read.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export function gloss_passages_same_as_explains(passages, pointer) {
  "Every different explanation one pointer could be naming: what is written about that spelling, in the verse the pointer names.";
  "$plain passages";
  "the passages are one chapter's authored stretches, all of them, in the order the chapter runs.";
  "$plain pointer";
  "the pointer names a word by its spelling and by the verse it stands in.";
  "Everything found is given back rather than the first of them, because the count is the answer. One is the pointer working. None means the reader is sent to a word nobody explained there. More than one means the address caught two different meanings and nothing in the pointer says which, so choosing quietly would be choosing wrongly half the time.";
  "An entry that is itself pointing is passed over. A pointer standing in for a pointer says nothing new, and following one would be following a chain that may not end.";
  "Spellings meet with their capitals folded away, so a word opening a verse and the same word inside one are the same word. The words being folded are the English ones being taught, and folding does nothing to the Urdu.";
  let s = gloss_entry_word_read(pointer);
  let folded = text_lower_to(s);
  let verse = gloss_same_as_verse_read(pointer);
  let key = gloss_entry_explain_key();
  let found = [];
  for (let passage of passages) {
    let holds = gloss_passage_verse_holds_is(passage, verse);
    if (holds) {
      for (let entry of gloss_passage_entries(passage)) {
        let s2 = gloss_entry_word_read(entry);
        let spelling = text_lower_to(s2);
        let same = equal(spelling, folded);
        let explain = property_get_or_null(entry, key);
        let written = null_not_is(explain);
        let value = gloss_entry_same_as_read(entry);
        let says = null_is(value);
        if (same && written && says) {
          list_add(found, explain);
        }
      }
    }
  }
  let r = list_unique(found);
  return r;
}
