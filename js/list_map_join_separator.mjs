import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_join } from "./list_join.mjs";
export function list_map_join_separator(list, lambda$item, separator) {
  arguments_assert(arguments, 3);
  ("Turn every item into a piece of text and run the pieces together with the same");
  ("thing between each pair.");
  ("The one the empty and the space siblings are cases of, for a separator the");
  ("caller has in hand rather than one written into the name. The list of pieces in");
  ("between is given a name that nothing else ever reads.");
  let pieces = list_map(list, lambda$item);
  let joined = list_join(pieces, separator);
  return joined;
}
