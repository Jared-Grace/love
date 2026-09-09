import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { add } from "./add.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { list_unique } from "./list_unique.mjs";
export function gloss_entries_pointers_dangling(entries, lambda$pointer_is) {
  "How many explanations in one chapter's worth of entries point the reader back at a word they have already met, and how many of those point at nothing - no earlier entry in the same chapter having said anything about that word.";
  "$plain entries";
  "the entries are a chapter's authored glosses in the order a reader goes down them, which is what makes earlier mean earlier. Handed them in any other order this answers a different question and would be wrong quietly.";
  "A pointer is not a fault on its own. Telling a reader that this is the same preposition they met in verse three is true, useful, and shorter than saying it all again. It becomes a fault at the moment there is nothing up there to have met: the reader is sent to look for an explanation that was never written, and the entry has quietly said nothing at all.";
  "That is the whole reason this asks about the antecedent rather than about the wording. Which sentences are pointers cannot be read off their shape - a pointer and a full explanation open with the same words, and the store holds thousands of each - so a reader that judged by turn of phrase would call good writing bad. Whether the thing pointed at exists is not a matter of phrasing and can be settled.";
  "Words are matched with their capitals folded away, so a word opening a sentence and the same word inside one count as met. Folding does nothing in a script with no capitals, and the words being folded here are the English ones being taught.";
  "An entry whose explanation nobody has written yet is passed over rather than counted as having said something, because an absent explanation cannot be what a later pointer was pointing at.";
  let key = gloss_entry_explain_key();
  let said = {};
  let pointing = 0;
  let dangling = 0;
  let words = [];
  for (let entry of entries) {
    let explain = property_get_or_null(entry, key);
    let written = null_not_is(explain);
    if (written) {
      let word = gloss_entry_word_read(entry);
      let folded = text_lower_to(word);
      let pointer = lambda$pointer_is(explain);
      if (pointer) {
        pointing = add(pointing, 1);
        let earlier = property_get_or_null(said, folded);
        let alone = null_is(earlier);
        if (alone) {
          dangling = add(dangling, 1);
          list_add(words, folded);
        }
      }
      let says = not(pointer);
      if (says) {
        property_set(said, folded, 1);
      }
    }
  }
  let r = {
    pointing,
    dangling,
    words: list_unique(words),
  };
  return r;
}
