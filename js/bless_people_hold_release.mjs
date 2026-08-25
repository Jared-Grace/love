import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
export function bless_people_hold_release(people) {
  arguments_assert(arguments, 1);
  ("Lets these people go - they may walk out of the player's view again.");
  ("Written as forgetting the view they were being held in, rather than as a flag saying");
  ("they are free, so somebody nobody is holding carries nothing at all. That is almost");
  ("everybody almost always, and it is what makes the walking code's question about being");
  ("held cost one missing property.");
  function hold_forget(person) {
    property_delete_if_exists(person, "hold_cone");
  }
  each(people, hold_forget);
}
