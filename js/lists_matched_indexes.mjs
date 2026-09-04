import { lists_matched_indexes_same } from "./lists_matched_indexes_same.mjs";
import { lists_matched_indexes_earlier } from "./lists_matched_indexes_earlier.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function lists_matched_indexes(before, after) {
  "$plain before";
  "$plain after";
  "For each item of the first list, where the same item stands in the second list once the two have been laid alongside each other in order, or nothing where the second list has no partner for it.";
  "★ IT PAIRS IN ORDER RATHER THAN BY LOOKING EACH ITEM UP, WHICH IS THE ONLY WAY A REPEATED ITEM CAN BE PAIRED CORRECTLY. A psalm says the word praise fifteen times; asking where praise occurs answers with all fifteen and settles nothing. Laying the lists alongside each other keeps every pairing in order, so the third praise can only pair with the third one heard.";
  "★ WHAT IS MISSING FROM EITHER SIDE COSTS ONE PAIRING AND NEVER SHIFTS THE REST. A word skipped in the second list leaves nothing against its own place and the lists close up again straight after, where a reader walking both at once would be one out for the whole rest of the passage. That is the fault this exists to make impossible.";
  "The cost of the table is the two lengths multiplied, so this is for lists of the size of a psalm and not for the words of a book.";
  arguments_assert(arguments, 2);
  let size_before = before.length;
  let size_after = after.length;
  let cost_gap = -1;
  ("Each row holds the best score for having used that many items of each list. A row of nothing but gaps is what reaching either length without a single pairing costs.");
  let table = [];
  lists_matched_indexes_same(
    size_before,
    table,
    Float64Array,
    size_after,
    cost_gap,
    before,
    after,
  );
  ("Walking back from the far corner says which choice each step of the best score was made of. Only a step that paired two items that were the same is reported; a step that paired two different items is the table admitting it had no better move, not a match.");
  let indexes = [];
  for (let i = 0; less_than(i, size_before); i++) {
    indexes.push(null);
  }
  lists_matched_indexes_earlier(
    size_before,
    size_after,
    before,
    after,
    table,
    indexes,
    cost_gap,
  );
  return indexes;
}
