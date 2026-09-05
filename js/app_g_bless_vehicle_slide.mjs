import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_bless_vehicle_slide(vehicle, seconds) {
  arguments_assert(arguments, 2);
  ("Say how a car travels between the square it was on and the square it is going to: at a");
  ("steady speed, over the time given, and sideways only.");
  ("Written AFTER the car has been put down, and that order is the whole of why this exists.");
  ("Putting a square down writes the whole of its transition at once - both directions, a set");
  ("length, and an easing - so anything set before it is thrown away. This has to be the last");
  ("word or it is no word at all.");
  ("LINEAR, and that is the fix for traffic that moved in spurts. The easing every square");
  ("gets is right for a person taking a step: a step starts from a stand and ends at one, so");
  ("slow-fast-slow is what a step looks like. A car does not stop between squares. Easing each");
  ("square separately made every car brake at every kerbstone and pull away again, five times");
  ("a second, which is exactly the stutter it looked like. Held at one speed and handed a");
  ("length equal to the gap between two steps, the sliding runs into the next slide with");
  ("nothing between them, and a car crossing eight squares reads as one movement.");
  ("SIDEWAYS only, because a car never changes row. Naming the one property that moves keeps");
  ("the browser from watching a second one that will never change, and says plainly in the");
  ("style itself that a car stays in its lane.");
  ("Nought seconds is a real and wanted answer, not a mistake to guard against. It is how a");
  ("car that has driven off the end of the street gets back to the other end without being");
  ("seen to cross it.");
  let element = property_get(vehicle, "element");
  let transition = `left ${seconds}s linear`;
  html_style_assign(element, {
    transition: transition,
  });
}
