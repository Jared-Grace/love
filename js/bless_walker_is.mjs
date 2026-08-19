import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
export function bless_walker_is(fraction) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  ("Whether somebody is out walking the pavement rather than standing about outside their");
  ("own front door, drawn from a number between nought and one.");
  ("Two kinds of person, because a street with only one is not a street. Everybody walking");
  ("makes a procession and nobody belongs anywhere; everybody at home makes a set of");
  ("statues with the pavement empty between them. Both together are what a road through a");
  ("neighbourhood actually looks like - a few people going somewhere, past a lot of people");
  ("who are simply outside.");
  ("Drawn once and kept, unlike a pause. Which kind somebody is IS a fact about them: it is");
  ("the difference between a person the player will see again in a minute and a person who");
  ("will have walked out of sight, and a person who changed their mind about it every step");
  ("would be neither.");
  ("One in four, and the number is set by how much room there is rather than by taste. The");
  ("pavement holds a fixed count of tiles and a person standing on one blocks it, so too");
  ("many walkers and the pavement jams solid - people would spend the game turning round");
  ("in front of each other. The rest have the whole block to spread over, which is far more");
  ("room, so the crowded side is what sets the share.");
  let walker = less_than(fraction, 0.25);
  return walker;
}
