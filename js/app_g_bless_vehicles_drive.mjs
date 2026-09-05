import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_vehicle_pace_ms } from "./bless_vehicle_pace_ms.mjs";
import { divide } from "./divide.mjs";
import { app_g_bless_camera_still_class } from "./app_g_bless_camera_still_class.mjs";
import { app_g_bless_vehicle_onward } from "./app_g_bless_vehicle_onward.mjs";
import { html_class_has } from "./html_class_has.mjs";
import { each } from "./each.mjs";
export function app_g_bless_vehicles_drive(world, container_map) {
  arguments_assert(arguments, 2);
  ("Set all the traffic going, and keep it going for as long as the map is on screen.");
  ("ONE clock for the whole road, and that is the change that stopped cars driving through");
  ("one another. Every car used to keep its own, at its own speed, so two cars sharing a lane");
  ("were a chase - and a road made of squares has nothing in it that can stop the quick one");
  ("arriving at the slow one and passing through. Stepped together at one speed, the gaps the");
  ("cars were laid out with are the gaps they keep for ever, and nothing has to be checked.");
  ("It is also fewer moving parts. A timer apiece meant a dozen clocks drifting against each");
  ("other, each waking the browser on its own; one clock wakes it once and moves everything.");
  ("Asked once, where the crowd is set walking, so that the street starts moving as one thing");
  ("- people and cars together - rather than the road coming to life at some other moment.");
  ("It asks the MAP whether it is being held still rather than asking itself. Freezing the");
  ("street for a celebration is done by putting a class on the container, so the question to");
  ("answer is a question about the container - and asking it that way means the traffic");
  ("respects any future reason for freezing without being told about it.");
  ("A held step is SKIPPED and not queued. Every car misses the same one, so a celebration");
  ("costs the whole road one square and costs the arrangement nothing; the cars come out of");
  ("it spaced exactly as they went in.");
  ("A car is NOT pinned the way a person is while the map is held. Pinning writes a person");
  ("back to where their picture actually got to mid-step, which needs the pieces a character");
  ("is made of, and a car has none of them. So a car that was mid-slide when the freeze began");
  ("finishes that slide at once instead: at most one square, once per celebration, on a street");
  ("the player is not looking at because the camera has gone to the house that just lit up.");
  ("The next step is booked BEFORE the cars are moved rather than after. Moving them is where");
  ("anything can go wrong, and a clock wound at the end of the work is a clock that stops for");
  ("good the first time the work throws - which would leave a dead street and nothing said.");
  let vehicles = property_get(world, "vehicles");
  let pace = bless_vehicle_pace_ms();
  let seconds = divide(pace, 1000);
  let name = app_g_bless_camera_still_class();
  function vehicle_onward(vehicle) {
    app_g_bless_vehicle_onward(vehicle, seconds);
  }
  function traffic_onward() {
    setTimeout(traffic_onward, pace);
    let held = html_class_has(container_map, name);
    if (held) {
      return;
    }
    each(vehicles, vehicle_onward);
  }
  setTimeout(traffic_onward, pace);
}
