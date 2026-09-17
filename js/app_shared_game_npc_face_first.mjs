import { arguments_assert } from "./arguments_assert.mjs";
import { property_equals } from "./property_equals.mjs";
import { app_shared_game_npc_turn_ready } from "./app_shared_game_npc_turn_ready.mjs";
import { app_shared_game_npc_face } from "./app_shared_game_npc_face.mjs";
export function app_shared_game_npc_face_first(npc, way) {
  arguments_assert(arguments, 2);
  ("A person about to step a way they are not facing spends this step turning to face it instead, and answers whether the step was spent that way - true means stand still now and walk it next time.");
  ("Turning and walking are TWO steps, never one. Turned while sliding, somebody going back the way they came walked backwards while spinning round, which reads as a person twirling rather than a person changing their mind.");
  ("And the turn itself waits out the rest after their last turn, standing where they are. A turn hard on the heels of another is a person spinning, and even the quarter turns of stepping round somebody came quick enough on a phone to read as twirling.");
  let facing_way = property_equals(npc, "direction", way);
  if (facing_way) {
    return false;
  }
  let ready = app_shared_game_npc_turn_ready(npc, way);
  if (ready) {
    app_shared_game_npc_face(npc, way);
  }
  return true;
}
