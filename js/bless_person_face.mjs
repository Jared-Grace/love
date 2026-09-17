import { property_get } from "./property_get.mjs";
import { bless_person_turn_quarters } from "./bless_person_turn_quarters.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_game_npc_face } from "./app_shared_game_npc_face.mjs";
export function bless_person_face(person, direction) {
  arguments_assert(arguments, 2);
  ("Somebody on the street turns to look a new way, and it is written down that they have just turned.");
  ("Every turn a person on this street makes goes through here - a look round while standing about, and a turn to face the way they are about to walk - so what the rest after a turn is measured from - when it was, and how big - is written by one line rather than remembered at each place a turn happens. A turn that forgot it would be the one that lets a person spin.");
  let facing = property_get(person, "direction");
  let quarters = bless_person_turn_quarters(facing, direction);
  property_set(person, "turn_quarters", quarters);
  let now = date_now_milliseconds();
  property_set(person, "turn_at", now);
  app_shared_game_npc_face(person, direction);
}
