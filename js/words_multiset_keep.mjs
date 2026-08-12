import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { each } from "./each.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { words_tally } from "./words_tally.mjs";
import { each_object } from "./each_object.mjs";
export function words_multiset_keep(items, words_get, words_allowed) {
  "Keep only the items whose words the allowed list still has to spare, in the order the items arrive, spending a word as it is kept.";
  "An item may name several words at once - an explanation of a phrase names every word of the phrase - so each item is asked for a list, and it is kept only if the allowed list can cover all of them together.";
  "Counting rather than asking whether a word is a member is what makes a repeat come out right: a word the allowed list carries once and the items name twice keeps the first and drops the second, which is the occurrence the allowed list does not carry.";
  let remaining = words_tally(words_allowed);
  let kept = [];
  function item_read(item) {
    let words = words_get(item);
    let wanted = words_tally(words);
    let short = false;
    function wanted_check(count, word) {
      let have = property_get_or_null(remaining, word);
      if (null_is(have)) {
        have = 0;
      }
      let lacking = less_than(have, count);
      if (lacking) {
        short = true;
      }
    }
    each_object(wanted, wanted_check);
    if (short) {
      return;
    }
    function wanted_spend(count, word) {
      let have = property_get_or_null(remaining, word);
      let left = subtract(have, count);
      property_set(remaining, word, left);
    }
    each_object(wanted, wanted_spend);
    list_add(kept, item);
  }
  each(items, item_read);
  return kept;
}
