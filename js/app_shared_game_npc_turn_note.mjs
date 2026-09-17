import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_shared_game_npc_turn_quarters } from "./app_shared_game_npc_turn_quarters.mjs";
import { positive_is } from "./positive_is.mjs";
import { property_set } from "./property_set.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
export function app_shared_game_npc_turn_note(npc, direction) {
  arguments_assert(arguments, 2);
  ("Writes down on a person that they are about to turn to face a new way - when, and how big a turn - so the rest before their next turn is measured from it.");
  ("EVERY turn a person makes is noted, including the ones they did not choose: being moved aside by somebody walking through the crowd turns them as surely as a look round does. A turn left unnoted was one the person's own walk could follow straight away with another, and a person pushed round and then turning straight back is a person twirling.");
  ("Facing the way they already face is not a turn and is not noted. A step straight on would otherwise restart the rest on every step, and forget how big the last real turn was.");
  ("Somebody never yet turned faces south, the same default the turn itself starts from.");
  let facing = property_get_or(npc, "direction", "south");
  let quarters = app_shared_game_npc_turn_quarters(facing, direction);
  let turning = positive_is(quarters);
  if (turning) {
    property_set(npc, "turn_quarters", quarters);
    let now = date_now_milliseconds();
    property_set(npc, "turn_at", now);
  }
}
