import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function bless_family_width() {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 0);
  ("How many squares of a building's front one family owns - the slab their own door sits in the middle of.");
  ("Three, and it has to be odd for the door to sit in the MIDDLE of it rather than at one edge. Three is the smallest odd width above one, and one would be a door with no wall of its own on either side of it.");
  ("A building is exactly its families laid side by side, so this times the number of doors is how wide the building is. Nothing is left over, which is what lets a finished family light its own share of the house instead of only its door.");
  let width = 3;
  return width;
}
