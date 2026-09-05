import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function bless_vehicles_per_lane() {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 0);
  ("How many cars are on one lane of one street at a time.");
  ("TWO. The number is set by what a player can see rather than by what a road holds. A block");
  ("is about forty squares long and a phone shows seven of them at once, so the player is");
  ("looking at roughly a sixth of the street; two cars a lane means about one car in view per");
  ("direction at any moment, which reads as a road with traffic on it.");
  ("One would be worse than it sounds. A single car a lane spends most of its life outside");
  ("the piece of street being looked at, so the road would appear empty and then briefly not,");
  ("and the two lanes would take turns being empty rather than both looking used.");
  ("Many more would be worse in the other direction. This is a quiet residential street with");
  ("houses and lawns on it - a queue of cars nose to tail says city centre, and it would also");
  ("cover the kerb the pavement is supposed to be readable against.");
  ("Per LANE and not per street, so the number keeps meaning the same thing if the road is");
  ("ever made deeper. A road three rows across would carry half as much traffic each lane if");
  ("this were counted per street, which is not what a wider road means.");
  let count = 2;
  return count;
}
