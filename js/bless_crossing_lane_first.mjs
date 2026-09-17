import { arguments_assert } from "./arguments_assert.mjs";
import { g_direction_across } from "./g_direction_across.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { g_direction_opposite } from "./g_direction_opposite.mjs";
import { equal } from "./equal.mjs";
export function bless_crossing_lane_first(player, toward) {
  arguments_assert(arguments, 2);
  ("Which lane a walker at a kerb looks up first: the one she is already facing, if she is facing either.");
  ("A walker who came along the pavement arrives pointed up one of the two lanes, so that look is already done. Squaring up to the road and then turning back to the same lane would be looking the same way twice - left, centre, left, centre, right - where a person does left, centre, right.");
  ("Facing neither lane, the order does not matter and the lane is the one the crossing names.");
  let lane = g_direction_across(toward);
  let pointed = property_get_or(player, "direction", "south");
  let other = g_direction_opposite(lane);
  let along_other = equal(pointed, other);
  if (along_other) {
    lane = other;
  }
  return lane;
}
