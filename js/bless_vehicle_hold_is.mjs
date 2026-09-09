import { arguments_assert } from "./arguments_assert.mjs";
import { bless_vehicle_landing } from "./bless_vehicle_landing.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { list_any } from "./list_any.mjs";
import { property_equals } from "./property_equals.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function bless_vehicle_hold_is(vehicle, world) {
  arguments_assert(arguments, 2);
  ("Whether one car must STAY WHERE IT IS this step - because somebody is walking on the road");
  ("in front of it, or because the square it would move into already has a car in it.");
  ("Giving way to somebody on the crossing is the driver's half of the same law the walker");
  ("keeps. The walker is kept out of the traffic by having no route through it; the driver is");
  ("kept off the walker by this. Only one of those was in place, and a rule that binds the");
  ("weaker party alone is not a law, it is a hazard - the crossing would have been paint over");
  ("a place a car still drove through people.");
  ("It stops for somebody ANYWHERE AHEAD on the road, in either lane, rather than only for");
  ("the square it is about to enter. A car that brakes at the last moment has already failed;");
  ("what a driver approaching a crossing actually does is slow from a distance because there");
  ("is a person on it. And either lane counts, because a person halfway over is about to be");
  ("in the other one - waiting only for the lane they have already reached would mean timing");
  ("the run at them.");
  ("Behind it, it stops for nobody. A car that has passed the crossing is no danger to");
  ("anybody still on it, and holding the whole lane until the road empties would leave a");
  ("street where nothing moves whenever the player is out walking.");
  ("It also holds for the car IN FRONT, and that part is not politeness but arithmetic: the");
  ("moment one car can stop, the one behind it can arrive in the square it is standing in.");
  ("Cars used to be spaced out along the lane and all moved at once, so they could never");
  ("meet; giving way breaks that, and two cars in one square is the thing this whole");
  ("arrangement was supposed to look better than.");
  ("A car re-entering at the far end holds for nothing. It is not stepping onward, it is the");
  ("same car being used again from the beginning of the lane, and the beginning of a lane is");
  ("nowhere near the middle of the block where the crossing is.");
  let r = bless_vehicle_landing(vehicle);
  let landing = property_get(r, "landing");
  let gone = property_get(r, "gone");
  if (gone) {
    return false;
  }
  let y = property_get(vehicle, "y");
  let vehicles = property_get(world, "vehicles");
  function in_landing_is(other) {
    let at_found = property_get(other, "x");
    let row = property_get(other, "y");
    let same_lane = equal(row, y);
    let same_square = equal(at_found, landing);
    let both = and(same_lane, same_square);
    return both;
  }
  let queued = list_any(vehicles, in_landing_is);
  if (queued) {
    return true;
  }
  let east_is = property_equals(vehicle, "direction", "east");
  let roads = property_get(world, "roads");
  let player = property_get(world, "player");
  let key = g_coordinates_key(player);
  let off_road = property_exists_not(roads, key);
  if (off_road) {
    return false;
  }
  let at = property_get(player, "x");
  let coming = less_than_equal(at, landing);
  if (east_is) {
    coming = greater_than_equal(at, landing);
  }
  return coming;
}
