import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_bless_vehicle_place } from "./app_g_bless_vehicle_place.mjs";
import { app_g_bless_vehicle_slide } from "./app_g_bless_vehicle_slide.mjs";
export function app_g_bless_vehicle_onward(vehicle, seconds) {
  arguments_assert(arguments, 2);
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
  let direction = property_get(vehicle, "direction");
  let east_is = equal(direction, "east");
  let x = property_get(vehicle, "x");
  let entry = property_get(vehicle, "entry");
  let finish = property_get(vehicle, "exit");
  let onward = subtract(x, 1);
  let gone = less_than(onward, finish);
  if (east_is) {
    onward = add(x, 1);
    gone = greater_than(onward, finish);
  }
  let landing = onward;
  let slide = seconds;
  if (gone) {
    landing = entry;
    slide = 0;
  }
  property_set(vehicle, "x", landing);
  app_g_bless_vehicle_place(vehicle);
  app_g_bless_vehicle_slide(vehicle, slide);
}
