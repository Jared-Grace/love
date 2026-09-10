import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { ternary } from "./ternary.mjs";
export function list_random_item_pair_different(list) {
  arguments_assert(arguments, 1);
  ("two of the list's items drawn at random, different from one another wherever the list has more than one to give; a list holding only one gives that item twice, because there is nothing else to give");
  ("The list is copied before it is shuffled, because ",
    fn_name("list_shuffle"),
    " rearranges the very list it is handed. The lists asked here are things a caller keeps and reads again - a lesson's own operator list, read once per screen - and reordering that in place would be a change nobody asked for and nothing would report.");
  let copy = list_copy(list);
  list_shuffle(copy);
  let first = copy[0];
  let single = list_size_1(copy);
  let second = ternary(single, first, copy[1]);
  let pair = [first, second];
  return pair;
}
