import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_character_face } from "./app_shared_game_character_face.mjs";
import { app_shared_animation_sleep } from "./app_shared_animation_sleep.mjs";
import { property_get } from "./property_get.mjs";
import { range } from "./range.mjs";
import { bless_crossing_clear_is } from "./bless_crossing_clear_is.mjs";
import { app_shared_animation_sleep_quick } from "./app_shared_animation_sleep_quick.mjs";
export async function app_g_bless_crossing_wait(
  world,
  to,
  player,
  player_img_c,
) {
  arguments_assert(arguments, 4);
  ("Holds the walker at the kerb: they look one way, then the other, then stand there until");
  ("the road is clear, and only then does the walk go on.");
  ("LOOKING is the part that is worth the time it costs. The waiting could have been done");
  ("silently and the walk would have been just as safe, and it would have read as the game");
  ("having stuck. A person who turns their head has visibly decided something, and what they");
  ("have decided is the thing this whole crossing exists to teach - you look before you step");
  ("into a road.");
  ("It looks WEST first and then EAST, in that order, because a walk is a sequence and a");
  ("sequence has to have an order; either would do, and doing both is the point. Turning once");
  ("would be checking the lane in front and trusting the other one.");
  ("Then it waits, and the waiting is a LOOP rather than a fixed pause, because what is being");
  ("waited on is a car getting out of the way and cars are not on a schedule the walker");
  ("knows. A fixed pause is a guess that is too long whenever the road was already empty and");
  ("too short exactly when it matters.");
  ("The wait is BOUNDED, and it is worth being plain about why that is safe rather than");
  ("merely convenient. Cars give way to anybody standing on the road, so a walker who steps");
  ("out stops the traffic instead of being hurt by it. The bound therefore cannot cause an");
  ("accident; all it can do is stop the game freezing if the traffic somehow never leaves a");
  ("gap. Waiting for ever is the one outcome that would be worse than crossing.");
  app_shared_game_character_face(player, player_img_c, "west");
  await app_shared_animation_sleep();
  app_shared_game_character_face(player, player_img_c, "east");
  await app_shared_animation_sleep();
  let at = property_get(to, "x");
  ("Forty looks at the road is several times longer than the longest gap between two cars on");
  ("a lane this length, so reaching the end of it means something is wrong rather than that");
  ("the traffic was heavy.");
  let tries = 40;
  for (let attempt of range(tries)) {
    let clear = bless_crossing_clear_is(world, at);
    if (clear) {
      return;
    }
    await app_shared_animation_sleep_quick();
  }
}
