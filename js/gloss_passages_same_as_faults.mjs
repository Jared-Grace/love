import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_entry_same_as_read } from "./gloss_entry_same_as_read.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { gloss_passages_same_as_explains } from "./gloss_passages_same_as_explains.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { gloss_same_as_verse_read } from "./gloss_same_as_verse_read.mjs";
import { list_add } from "./list_add.mjs";
export function gloss_passages_same_as_faults(passages) {
  "Every pointer in one authored chapter that does not land on exactly one explanation, given back with the word it stands on, the word and verse it names, and how many explanations that address caught.";
  "$plain passages";
  "the passages are the whole of one chapter as it was authored, because a pointer may name a verse anywhere in the chapter.";
  "None caught and several caught are both faults, and they are the two ways a pointer fails. None means the reader is sent to a verse where nobody explained that word, and the entry has quietly said nothing at all. Several means the address holds two different meanings - in as a time and in as a place stood together in half the places measured - and whichever one a page picked, it would be the wrong one about as often as the right one, without saying it had chosen.";
  "The count comes back rather than the explanation, because the thing a person has to fix is which address was written, and reading the words found would not tell them that.";
  let faults = [];
  for (let passage of passages) {
    for (let entry of gloss_passage_entries(passage)) {
      let pointer = gloss_entry_same_as_read(entry);
      let pointing = null_not_is(pointer);
      if (pointing) {
        let explains = gloss_passages_same_as_explains(passages, pointer);
        let choices = list_size(explains);
        let settled = equal(choices, 1);
        if (not(settled)) {
          let fault = {
            word: gloss_entry_word_read(entry),
            names: gloss_entry_word_read(pointer),
            verse: gloss_same_as_verse_read(pointer),
            choices,
          };
          list_add(faults, fault);
        }
      }
    }
  }
  return faults;
}
