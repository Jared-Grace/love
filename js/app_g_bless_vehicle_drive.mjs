import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_camera_still_class } from "./app_g_bless_camera_still_class.mjs";
import { html_class_has } from "./html_class_has.mjs";
import { app_g_bless_vehicle_onward } from "./app_g_bless_vehicle_onward.mjs";
import { random } from "./random.mjs";
import { multiply } from "./multiply.mjs";
export function app_g_bless_vehicle_drive(vehicle, container_map) {
  arguments_assert(arguments, 2);
  ("Set one car going, and leave it going for as long as the map is on screen.");
  ("The same shape as a person walking: a call that schedules itself, so each car keeps its");
  ("own clock and nothing anywhere has to hold a list of who is due to move next. Two cars at");
  ("different speeds are then two independent things rather than two rows of one table.");
  ("It asks the MAP whether it is being held still rather than asking itself. Freezing the");
  ("street for a celebration is done by putting a class on the container, so the question a");
  ("car has to answer is a question about the container - and asking it that way means a car");
  ("respects any future reason for freezing without being told about it.");
  ("A car is NOT pinned the way a person is while the map is held. Pinning writes a person");
  ("back to where their picture actually got to mid-step, which needs the pieces a character");
  ("is made of, and a car has none of them. So a car that was mid-slide when the freeze began");
  ("finishes that slide at once instead: at most one square, once per celebration, on a street");
  ("the player is not looking at because the camera has gone to the house that just lit up.");
  ("It stops MOVING for the whole freeze, which is the part that matters - a car crossing the");
  ("street behind a prayer would pull the eye straight off it.");
  ("The first move is a random part of one pace away rather than a whole pace, so that cars");
  ("started together in one loop do not all step on the same beat for ever after. Two cars on");
  ("one lane moving in lockstep read as one object with a gap in it.");
  let pace = property_get(vehicle, "pace");
  let name = app_g_bless_camera_still_class();
  function driven() {
    let held = html_class_has(container_map, name);
    if (held) {
      setTimeout(driven, pace);
      return;
    }
    let wait = app_g_bless_vehicle_onward(vehicle);
    setTimeout(driven, wait);
  }
  let fraction = random();
  let first = multiply(fraction, pace);
  setTimeout(driven, first);
}
