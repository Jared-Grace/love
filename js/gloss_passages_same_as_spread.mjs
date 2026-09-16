import { greater_than } from "./greater_than.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_same_as_verse_read } from "./gloss_same_as_verse_read.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_passage_verse_holds_is } from "./gloss_passage_verse_holds_is.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { equal } from "./equal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { gloss_entry_same_as_read } from "./gloss_entry_same_as_read.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
export function gloss_passages_same_as_spread(passages, pointer) {
  "Where the explanations an address catches are lying - how many stored passages hold the verse and explain the word, how many different explanations there are altogether, and how many of them sit inside a single passage.";
  "$plain passages";
  "the passages are the whole chapter, because the address has to be tried against everything it could catch.";
  "$plain pointer";
  "the pointer is the address being tried: a spelling and a verse number.";
  "An address that catches more than one explanation can be failing in two different ways, and they need different repairs. Several passages holding the same verse is one thing; one passage explaining the same word twice inside itself is another. Counting them apart is what says which repair is the one needed.";
  let s = gloss_entry_word_read(pointer);
  let folded = text_lower_to(s);
  let verse = gloss_same_as_verse_read(pointer);
  let key = gloss_entry_explain_key();
  let found = [];
  let holders = 0;
  let most = 0;
  for (let passage of passages) {
    let holds = gloss_passage_verse_holds_is(passage, verse);
    if (holds) {
      let here = [];
      for (let entry of gloss_passage_entries(passage)) {
        let s2 = gloss_entry_word_read(entry);
        let spelling = text_lower_to(s2);
        let same = equal(spelling, folded);
        let explain = property_get_or_null(entry, key);
        let written = null_not_is(explain);
        let value = gloss_entry_same_as_read(entry);
        let says = null_is(value);
        if (same && written && says) {
          list_add(here, explain);
          list_add(found, explain);
        }
      }
      let apart = list_unique(here);
      let left = list_size(apart);
      let any = greater_than(left, 0);
      if (any) {
        holders = add(holders, 1);
      }
      let deeper = greater_than(left, most);
      if (deeper) {
        most = left;
      }
    }
  }
  let all = list_unique(found);
  let r = {
    passages: holders,
    explains: list_size(all),
    most,
  };
  return r;
}
