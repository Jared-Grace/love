import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { and } from "./and.mjs";
export function bless_kerb_step_is(world, from, to) {
  arguments_assert(arguments, 3);
  ("Whether one step of a walk is the step OFF THE KERB - the moment a walker who has been on");
  ("the pavement puts a foot on the road.");
  ("It is the pair of squares that says it and not either one alone. Standing on the road is");
  ("already being on the road, and heading for the road from the road is carrying on across;");
  ("what is being looked for is the single step where those two differ, because that is the");
  ("one moment anybody looks both ways in.");
  ("Asked on every step of every walk, and true at most once or twice in any of them. Most");
  ("walks never touch the road at all, and even a walk that crosses one steps off a kerb");
  ("once - so the cheap answer is the common one, which is the right way round.");
  let roads = property_get(world, "roads");
  let key = g_coordinates_key(to);
  let onto_road = property_exists(roads, key);
  let key_from = g_coordinates_key(from);
  let from_road = property_exists(roads, key_from);
  let from_pavement = not(from_road);
  let stepping_out = and(onto_road, from_pavement);
  return stepping_out;
}
