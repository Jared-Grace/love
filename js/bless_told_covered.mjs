import { arguments_assert } from "./arguments_assert.mjs";
import { bless_people_noun } from "./bless_people_noun.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bless_told_covered(count) {
  arguments_assert(arguments, 1);
  ("The line shown after a prayer that reached more than the one person it was said over -");
  ("how many people it covered.");
  ("A prayer for a whole household lights three faces at once, and two of them are usually");
  ("somewhere else on the street where the player cannot see them go bright. Without this,");
  ("a rung that tripled the work looks exactly like the rung below it, and the player has");
  ("no way to tell that anything they earned is being spent.");
  ("It counts PEOPLE and not places, because people are what the player came to pray for.");
  ("A line reading one household would be true and would say nothing - the player does not");
  ("know what a household holds, and finding out is not the reward on offer here.");
  let noun = bless_people_noun(count);
  let line = text_combine_multiple(["You prayed for ", count, " ", noun]);
  return line;
}
