import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { each } from "./each.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
export function words_multiset_keep(items, word_get, words_allowed) {
  "Keep only as many items of each word as the allowed list actually holds, in the order the items arrive.";
  "A word that appears twice in the items and once in the allowed list keeps its first item and drops its second, which is the whole reason this counts rather than merely asking whether a word is a member. Asking membership would keep both, and the second is exactly the one that should go: it is the occurrence the allowed list does not carry.";
  let remaining = {};
  function word_allow(word) {
    let count = property_get_or_null(remaining, word);
    if (null_is(count)) {
      count = 0;
    }
    let value = add(count, 1);
    property_set(remaining, word, value);
  }
  each(words_allowed, word_allow);
  let kept = [];
  function item_read(item) {
    let word = word_get(item);
    let count = property_get_or_null(remaining, word);
    if (null_is(count)) {
      return;
    }
    let available = greater_than(count, 0);
    if (not(available)) {
      return;
    }
    let value2 = subtract(count, 1);
    property_set(remaining, word, value2);
    list_add(kept, item);
  }
  each(items, item_read);
  return kept;
}
