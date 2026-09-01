import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { list_get } from "./list_get.mjs";
export function list_middle(list) {
  arguments_assert(arguments, 1);
  ("The item halfway along a list.");
  ("An even-length list has no middle, and this leans to the LATER of the two rather than");
  ("throwing. A caller asking for the middle wants somewhere near the centre to stand or to");
  ("point at, and refusing every list of even length would make it useless for exactly the");
  ("half of all lists that nothing is wrong with.");
  let count = list_size(list);
  let middle = divide_floor(count, 2);
  let item = list_get(list, middle);
  return item;
}
