import { arguments_assert } from "./arguments_assert.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
export function bless_vehicle_landing(vehicle) {
  arguments_assert(arguments, 1);
  ("Where one car would be after its next step, and whether that step would take it off the");
  ("end of its lane and back to the beginning.");
  ("It is asked TWICE for every step and by two different questions, which is the whole");
  ("reason it is a thing of its own. Driving needs to know where the car is going; giving way");
  ("needs to know what is standing there. Two copies of the same arithmetic would be two");
  ("answers about the same square, and the day they parted a car would stop for somebody and");
  ("then drive somewhere else.");
  ("A car that has run out of lane is handed back its ENTRY rather than a square one further");
  ("on, and it is worth saying that this is not really a step at all - it is the same car");
  ("used again at the far end, because a street with a fixed number of cars on it looks like");
  ("a street with traffic and costs nothing to keep.");
  ("Nothing is written down here. Asking where a car would go must be free of consequences,");
  ("or the asking itself moves it - and giving way asks precisely in order NOT to move.");
  let east_is = property_equals(vehicle, "direction", "east");
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
  if (gone) {
    landing = entry;
  }
  let r = {
    landing: landing,
    gone: gone,
  };
  return r;
}
