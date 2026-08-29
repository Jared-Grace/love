import { arguments_assert } from "./arguments_assert.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { each } from "./each.mjs";
export function app_g_bless_people_still_end(people) {
  arguments_assert(arguments, 1);
  ("Gives the street back its walking, after it was held still so that a celebration could");
  ("be watched.");
  ("Nobody is put anywhere by this. Each person is standing where their picture had got to");
  ("when the street stopped, which may be part way across a square, and their next step");
  ("carries them on from there in the ordinary way - so the street starts moving again");
  ("rather than snapping back into line first.");
  ("Written as forgetting the mark rather than as setting a second one, so somebody nobody");
  ("is holding carries nothing at all - the same shape the player's own hold on a person");
  ("uses, and what makes the walking code's question about being held cost one missing");
  ("property.");
  ("Whoever held the street still lets it go. A celebration that ended without this would");
  ("leave a street where nobody ever walks again, and nothing anywhere would report it.");
  function person_go(person) {
    property_delete_if_exists(person, "held_still");
  }
  each(people, person_go);
}
