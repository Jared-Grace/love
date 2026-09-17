import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
import { app_shared_game_character_turn } from "./app_shared_game_character_turn.mjs";
import { app_shared_game_character_turn_frame_sleep } from "./app_shared_game_character_turn_frame_sleep.mjs";
export async function app_shared_game_character_turn_held(
  character,
  img,
  direction,
) {
  arguments_assert(arguments, 3);
  ("Turns a person to face a new way and holds the last picture for one frame of a turn, so");
  ("whatever comes next starts from a facing the eye has actually seen.");
  ("A turn does not hold its last picture, because most callers have their own reason to hold");
  ("or move on. This is for the caller that chains a second turn straight after: without the");
  ("hold, the facing in the middle is written and overwritten in the same instant and never");
  ("drawn, and the two turns read as one turn that skipped a picture.");
  ("Already facing that way is no turn and no hold, so asking for the facing a person already");
  ("has costs nothing.");
  let from = property_get_or(character, "direction", "south");
  let arrived = equal(from, direction);
  if (arrived) {
    return;
  }
  await app_shared_game_character_turn(character, img, direction);
  await app_shared_game_character_turn_frame_sleep();
}
