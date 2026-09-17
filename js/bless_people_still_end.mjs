import { arguments_assert } from "./arguments_assert.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { app_shared_game_npc_place } from "./app_shared_game_npc_place.mjs";
import { each } from "./each.mjs";
export function bless_people_still_end(people) {
  arguments_assert(arguments, 1);
  ("Gives the street back its walking, after it was held still so that a celebration could");
  ("be watched.");
  ("Each person is standing where their picture had got to when the street stopped, which");
  ("may be part way across a square, so each is sent on to their own square from there. It");
  ("used to be left to their next step, and a next step is not always a step: a person who");
  ("turns, or stands a while, stayed drawn between two squares for as long as that lasted,");
  ("and every camera journey stranded the half of the street that was mid-stride. Sent on");
  ("from where they stand, the street carries on moving rather than snapping back into line.");
  ("It must come after sliding is switched back on for the map, or the send-on is a jump.");
  ("Written as forgetting the mark rather than as setting a second one, so somebody nobody");
  ("is holding carries nothing at all - the same shape the player's own hold on a person");
  ("uses, and what makes the walking code's question about being held cost one missing");
  ("property.");
  ("Whoever held the street still lets it go. A celebration that ended without this would");
  ("leave a street where nobody ever walks again, and nothing anywhere would report it.");
  function person_go(person) {
    property_delete_if_exists(person, "held_still");
    app_shared_game_npc_place(person);
  }
  each(people, person_go);
}
