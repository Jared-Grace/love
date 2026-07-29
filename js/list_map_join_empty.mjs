import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function list_map_join_empty(list, lambda$item) {
  arguments_assert(arguments, 2);
  ("Turn every item into a piece of text and run the pieces together with nothing");
  ("between them.");
  ("The sibling of the one that puts a space between them. Building a string a");
  ("piece at a time is how almost all the text here is made, and the join is the");
  ("half a caller keeps forgetting it has to name a list for.");
  let pieces = list_map(list, lambda$item);
  let joined = list_join_empty(pieces);
  return joined;
}
