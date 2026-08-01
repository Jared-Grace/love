import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
export function list_size_less_than_value(list, value) {
  arguments_assert(arguments, 2);
  ("Whether a list holds fewer things than this number.");
  ("It used to work out the size, throw it away, and compare the list itself against");
  ("the number - which JavaScript answers by writing the whole list out as text, so");
  ("the answer had nothing to do with how many things were in it. Nothing called it,");
  ("so nothing was ever wrong; a function nobody uses is also a function nobody");
  ("checks.");
  let size = list_size(list);
  let lt = less_than(size, value);
  return lt;
}
