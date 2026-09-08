import { bless_vehicle_landing } from "./bless_vehicle_landing.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_bless_vehicle_place } from "./app_g_bless_vehicle_place.mjs";
import { app_g_bless_vehicle_slide } from "./app_g_bless_vehicle_slide.mjs";
export function app_g_bless_vehicle_onward(vehicle, seconds, held) {
  arguments_assert(arguments, 3);
  ("Move one car one square along its lane, and slide it there over the time given.");
  ("A car that has run out of road appears back at the other end instead. There is no pause");
  ("before it sets off again, and there used to be one - a random wait, so that the traffic");
  ("did not arrive in a procession. That wait is gone, and losing it is what keeps the cars");
  ("apart: the whole promise that no car can catch another one rests on every car taking");
  ("exactly one square on every beat, and a car sitting out a few beats at the kerb is a car");
  ("closing the gap on the one in front by however many beats it sat out.");
  ("The return is instant rather than slid, which is the one place a car is allowed to move");
  ("without being seen to move. The player sees about five squares of a street thirty-eight");
  ("squares long, so both ends of the lane are off screen together and the jump happens where");
  ("nobody is looking. Slid, it would drive backwards through the whole street.");
  ("How LONG the slide takes is handed in rather than worked out here, because it is a fact");
  ("about the beat the whole road is keeping and not about this car. Worked out here it would");
  ("be worked out again for every car on every beat, and the day the beat changed it would be");
  ("this that quietly disagreed with the timer driving it.");
  ("The slide is written after the car is put down and not before. Putting a square down");
  ("writes the whole of its transition, so the order is not a preference - reversed, the");
  ("sliding is simply thrown away and the cars go back to hopping.");
  ("HELD means the car stays exactly where it is for this step, and it is decided by whoever");
  ("is driving the traffic rather than here. A car gives way to somebody on the crossing and");
  ("to the car in front of it, and both of those are facts about the street rather than about");
  ("the car - a car cannot see the street from inside itself, and asking it to would put the");
  ("whole world into the hands of every one of them.");
  ("A held car is not re-drawn at all. Placing it again where it already is would be a slide");
  ("of no distance, and a slide of no distance still costs the browser an animation to");
  ("interrupt when the next step comes - a car standing still is best said by saying nothing.");
  if (held) {
    return;
  }
  let r = bless_vehicle_landing(vehicle);
  let landing = property_get(r, "landing");
  let gone = property_get(r, "gone");
  let slide = seconds;
  if (gone) {
    slide = 0;
  }
  property_set(vehicle, "x", landing);
  app_g_bless_vehicle_place(vehicle);
  app_g_bless_vehicle_slide(vehicle, slide);
}
