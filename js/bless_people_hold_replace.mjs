import { bless_people_hold_release } from "./bless_people_hold_release.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { property_set } from "./property_set.mjs";
export function bless_people_hold_replace(people_before, people_after, cone) {
  arguments_assert(arguments, 3);
  ("Lets go of everybody who was being held and takes hold of everybody who is now, marking");
  ("the new ones with the view they are being held inside.");
  ("Letting go and taking hold are one job and not two, because a caller who did them");
  ("separately could do the first and not the second - and a person left marked with a view");
  ("nobody is looking through any more would pace inside a shape that is no longer on the");
  ("screen, for the rest of the game.");
  ("Let go FIRST, and of everybody, even those about to be held again. Told to skip the");
  ("ones common to both, this would have to compare the two lists, and setting the mark");
  ("again costs less than working out that it did not need to be set.");
  bless_people_hold_release(people_before);
  function hold_take(person) {
    property_set(person, "hold_cone", cone);
  }
  each(people_after, hold_take);
}
