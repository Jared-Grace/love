import { g_coordinates_member_is } from "./g_coordinates_member_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_g_bless_lit_new(before, after) {
  arguments_assert(arguments, 2);
  ("Which squares of ground have only just been lit - the ones the world was showing after");
  ("a prayer that it was not showing before it.");
  ("Asked as a difference between two whole pictures rather than worked out from what was");
  ("prayed, because a prayer names one rung and lights whatever that finished off, which is");
  ("never a fixed amount. The third person in a house finishes the house; a prayer over a");
  ("house that was the last one standing finishes the building over the top of it. Nothing");
  ("at the moment of praying knows which of those just happened, and the two pictures do.");
  ("So this is also the test for whether anything happened at all. An empty answer is a");
  ("prayer that covered somebody and finished nothing, which is most of them - and that is");
  ("the whole of the rule for when the street should stop and celebrate.");
  let member_is = g_coordinates_member_is(before);
  function fresh_is(tile) {
    let was = member_is(tile);
    let fresh = not(was);
    return fresh;
  }
  let tiles = list_filter(after, fresh_is);
  return tiles;
}
