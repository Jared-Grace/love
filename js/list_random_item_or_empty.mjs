import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
export function list_random_item_or_empty(list) {
  arguments_assert(arguments, 1);
  ("One of these lines, said some of the time and left out the rest.");
  ("A tail a character adds to what they say - a softening, an acknowledgement, a");
  ("closing wish. Picking from several keeps it from wearing out; leaving it off");
  ("sometimes keeps it from reading as a formula. Neither alone is enough, and");
  ("every one of these was written as the two steps in a row.");
  let said = list_random_item(list);
  let sometimes = text_random_or_empty(said);
  return sometimes;
}
