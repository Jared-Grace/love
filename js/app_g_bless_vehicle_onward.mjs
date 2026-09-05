import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_g_bless_vehicle_place } from "./app_g_bless_vehicle_place.mjs";
import { g_img_square_style_transition_seconds } from "./g_img_square_style_transition_seconds.mjs";
import { random } from "./random.mjs";
import { bless_vehicle_gap_ms } from "./bless_vehicle_gap_ms.mjs";
import { divide } from "./divide.mjs";
export function app_g_bless_vehicle_onward(vehicle) {
  arguments_assert(arguments, 1);
  ("Move one car one square along its lane, and say how long until it should move again.");
  ("The whole of what driving is. Everything else about a car - when it happens, whether the");
  ("map is frozen - is somebody else's question, so this can be asked at any moment and always");
  ("does exactly one thing.");
  ("It hands back the WAIT rather than taking one, so that the ordinary case and the case of a");
  ("car that has just run off the end are the same call. A car that reached the end waits");
  ("longer before it comes back than a car simply crossing a square, and the caller does not");
  ("have to know which of those happened.");
  ("Off the end and back on at the other, because the street is a closed strip: there is");
  ("nothing beyond the last house but the edge of the world. That is done in THREE steps");
  ("spread over two calls, and each one is there for a reason.");
  ("It is hidden first, then moved, then the sliding is turned off for that move. Moved while");
  ("visible, the car would streak the whole length of the street in front of the player -");
  ("which is the one motion on this map that no real thing does. Hidden but still sliding, it");
  ("would arrive invisibly and then start driving from wherever the slide had got to.");
  ("The sliding is turned off AFTER the move rather than before, because putting a square");
  ("somewhere writes the whole transition in one word and would wipe a length written first.");
  ("It reappears on the NEXT call, not this one, and that is what the waiting flag is for. A");
  ("car shown the instant it is put back would be visible for the whole gap standing still at");
  ("the kerb, which reads as a parked car that suddenly leaves. Shown when the gap is over, it");
  ("arrives already moving.");
  let pace = property_get(vehicle, "pace");
  let element = property_get(vehicle, "element");
  let waiting = property_get(vehicle, "waiting");
  if (waiting) {
    property_set(vehicle, "waiting", false);
    html_style_assign(element, {
      opacity: "1",
    });
    return pace;
  }
  let direction = property_get(vehicle, "direction");
  let east_is = equal(direction, "east");
  let x = property_get(vehicle, "x");
  let edge_left = property_get(vehicle, "left");
  let edge_right = property_get(vehicle, "right");
  let onward = subtract(x, 1);
  let entry = edge_right;
  let finish = edge_left;
  if (east_is) {
    onward = add(x, 1);
    entry = edge_left;
    finish = edge_right;
  }
  let gone = less_than(onward, finish);
  if (east_is) {
    gone = greater_than(onward, finish);
  }
  if (gone) {
    html_style_assign(element, {
      opacity: "0",
    });
    property_set(vehicle, "x", entry);
    property_set(vehicle, "waiting", true);
    app_g_bless_vehicle_place(vehicle);
    g_img_square_style_transition_seconds(element, 0);
    let fraction = random();
    let gap = bless_vehicle_gap_ms(fraction);
    return gap;
  }
  property_set(vehicle, "x", onward);
  app_g_bless_vehicle_place(vehicle);
  let seconds = divide(pace, 1000);
  g_img_square_style_transition_seconds(element, seconds);
  return pace;
}
