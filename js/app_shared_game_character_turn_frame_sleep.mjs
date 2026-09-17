import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_animation_duration_quick } from "./app_shared_animation_duration_quick.mjs";
import { divide } from "./divide.mjs";
import { sleep } from "./sleep.mjs";
export async function app_shared_game_character_turn_frame_sleep() {
  arguments_assert(arguments, 0);
  ("How long one frame of a turning person is held, in thousandths of a second.");
  ("Half the short while, because a frame of a turn is not a change the eye is being asked");
  ("to read - it is one of several that add up to the change. A quarter turn is two of these");
  ("and comes to the short while exactly, so a turn that used to be a single swap followed");
  ("by that pause now takes the same time and spends it on movement instead of on waiting.");
  ("Worked out from that one while rather than written next to it, so a turn cannot drift");
  ("out of step with everything else that moves in this game.");
  let quick = app_shared_animation_duration_quick();
  let frame = divide(quick, 2);
  await sleep(frame);
}
