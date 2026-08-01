import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function list_map_concat_multiple(list, mapper) {
  arguments_assert(arguments, 2);
  ("Turns each item into a list of its own and hands back one list holding all of");
  ("them end to end.");
  ("Written out by hand in sixteen places before this existed, always the same two");
  ("steps in the same order, because the pair is what you reach for whenever one");
  ("thing answers with several: the names a statement binds, the tokens a lesson");
  ("expands to, the books a search matches. Two steps is small enough that nobody");
  ("felt the lack, and that is exactly why it stayed unnamed.");
  let mapped = list_map(list, mapper);
  let combined = list_concat_multiple(mapped);
  return combined;
}
