import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_map } from "./list_map.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_unique } from "./list_unique.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
export function gloss_entries_explains_repeated_kinds(entries) {
  "How many explanations in a list stand in a repeated group, split by whether the words wearing the wording are one word met again or genuinely different words.";
  "The two are opposite faults wearing one number, and holding them together made the number say the wrong thing. A wording given to `and` every time `and` turns up is one word being told the same thing twice, which is mended by writing the second one a back-reference. A wording given to `and` and to `but` and to `or` is three different words the reader learns nothing distinguishing about, which is mended by writing each of them its own sentence. Measured over the three stores, one of them is almost entirely the first and another is a third the second - so a single share cannot say which work is being asked for, and a gate kept on it moves for the wrong reasons.";
  "Words are matched with their capitals folded away, because a word at the head of a sentence and the same word inside one are the same word to a reader and to whoever is writing its explanation. Folding does nothing at all in a script that has no capitals, so the rule is safe to apply to every store rather than being chosen per language.";
  "It does NOT fold anything else. Two spellings of one name, and one word written with different accents over it, are counted as different words here - which reads high, and reads high honestly: the store really did write the same sentence under two spellings, and whether that was right is a judgment about that store rather than something this counter may quietly decide.";
  "An explanation nobody has written yet is dropped rather than gathered under the empty wording, which would otherwise be the largest repetition in every store and would be about nothing.";
  let key = gloss_entry_explain_key();
  function explain_written_is(entry) {
    let explain = property_get_or_null(entry, key);
    let written_found = null_not_is(explain);
    return written_found;
  }
  let written = list_filter(entries, explain_written_is);
  let grouped = list_group_by_property(written, key);
  let same = 0;
  let across = 0;
  for (let group of grouped) {
    let items = property_get(group, "items");
    let size = list_size(items);
    let shared = greater_than(size, 1);
    if (shared) {
      let words = list_map(items, gloss_entry_word_read);
      let folded = list_map(words, text_lower_to);
      let distinct = list_unique(folded);
      let spread = list_size(distinct);
      let one_word = equal(spread, 1);
      if (one_word) {
        same = add(same, size);
      }
      let several = not(one_word);
      if (several) {
        across = add(across, size);
      }
    }
  }
  let r = {
    same,
    across,
  };
  return r;
}
