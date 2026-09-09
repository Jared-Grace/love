import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { add } from "./add.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export function gloss_entries_capital_claim_wrong(
  entries,
  lambda$capital_claim_is,
) {
  "How many explanations among these say the word in front of the reader is written with a capital letter, how many of those sit on a word carrying no capital at all, and which words and wordings those were.";
  "A word carrying no capital settles the question without anyone reading the verse. The sentence says the first letter is a capital; the word in front of it has no capital; so the sentence is false where it stands, and it is false whoever wrote it and whatever they meant. Nothing else about the entry has to be known.";
  "The reason the explanation offers for the capital is deliberately not looked at. An earlier reading of this counted the reasons instead - it looked for sentences mentioning a verse or a sentence beginning - and it called ninety-six entries wrong when six were. Most of what it caught was correct writing: a sentence saying what a word does, or saying why a capital that stood here once is gone now. Asking whether a capital was claimed is asking about the word, and the word either wears one or it does not.";
  "The wordings are given back beside the words because a clause like this is written once and then carried, so a handful of distinct sentences usually accounts for every one of the faults - and the repair is to those sentences rather than to the entries.";
  let key = gloss_entry_explain_key();
  let claiming = 0;
  let wrong = 0;
  let words = [];
  let wordings = [];
  for (let entry of entries) {
    let explain = property_get_or_null(entry, key);
    let written = null_not_is(explain);
    if (written) {
      let claimed = lambda$capital_claim_is(explain);
      if (claimed) {
        claiming = add(claiming, 1);
        let word = gloss_entry_word_read(entry);
        let folded = text_lower_to(word);
        let plain = equal(word, folded);
        if (plain) {
          wrong = add(wrong, 1);
          list_add(words, folded);
          list_add(wordings, explain);
        }
      }
    }
  }
  let r = {
    claiming,
    wrong,
    words: list_unique(words),
    wordings: list_unique(wordings),
  };
  return r;
}
