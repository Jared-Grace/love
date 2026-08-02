import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_map_filter(list, mapper, keeper) {
  arguments_assert(arguments, 3);
  ("Turns each item into something else and keeps only the ones worth keeping.");
  ("The root the two named siblings beside it are cases of, for a test the caller");
  ("has in hand rather than one written into the name. The mapped list in between");
  ("is given a name that nothing else ever reads.");
  let mapped = list_map(list, mapper);
  let kept = list_filter(mapped, keeper);
  return kept;
}
