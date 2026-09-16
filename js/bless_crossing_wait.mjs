import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_character_face } from "./app_shared_game_character_face.mjs";
import { app_shared_animation_sleep } from "./app_shared_animation_sleep.mjs";
import { g_direction_opposite } from "./g_direction_opposite.mjs";
import { bless_crossing_glance_tries } from "./bless_crossing_glance_tries.mjs";
import { greater_than } from "./greater_than.mjs";
import { bless_crossing_clear_is } from "./bless_crossing_clear_is.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_shared_animation_sleep_quick } from "./app_shared_animation_sleep_quick.mjs";
export async function bless_crossing_wait(world, to, player, player_img_c) {
  arguments_assert(arguments, 4);
  ("Holds the walker at the kerb: they look one way, then the other, then stand there looking");
  ("up and down the road until it is clear, and only then does the walk go on.");
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
  ("The head KEEPS TURNING for as long as the wait lasts, and the two head turns before it");
  ("are the first two of the same thing rather than a separate ceremony. Somebody who looked");
  ("twice and then stood perfectly still is somebody who has stopped watching the road, which");
  ("is the opposite of what they are being shown; and a walker frozen mid-street is the one");
  ("thing that makes a wait read as the game having hung rather than as a person being");
  ("careful. The turning costs nothing, because the waiting was already happening.");
  ("The road is ASKED far more often than the head turns. Looking is what the player sees and");
  ("half a second a glance is about the pace of a person; but the gap being waited for is");
  ("measured in car-lengths and closes while it is being looked at, so a walker who checked");
  ("only when they turned their head would step out on a gap that was true half a second ago.");
  ("Ask quickly, turn slowly.");
  ("The wait is BOUNDED, and it is worth being plain about why that is safe rather than");
  ("merely convenient. Cars give way to anybody standing on the road, so a walker who steps");
  ("out stops the traffic instead of being hurt by it. The bound therefore cannot cause an");
  ("accident; all it can do is stop the game freezing if the traffic somehow never leaves a");
  ("gap. Waiting for ever is the one outcome that would be worse than crossing.");
  let facing = "west";
  app_shared_game_character_face(player, player_img_c, facing);
  await app_shared_animation_sleep();
  facing = g_direction_opposite(facing);
  app_shared_game_character_face(player, player_img_c, facing);
  await app_shared_animation_sleep();
  ("Forty looks at the road is several times longer than the longest gap between two cars on");
  ("a lane this length, so reaching the end of it means something is wrong rather than that");
  ("the traffic was heavy.");
  let tries = 40;
  let glance = bless_crossing_glance_tries();
  while (greater_than(tries, 0)) {
    let clear = bless_crossing_clear_is(world, to);
    if (clear) {
      return;
    }
    glance = subtract(glance, 1);
    let due = less_than_equal(glance, 0);
    if (due) {
      facing = g_direction_opposite(facing);
      app_shared_game_character_face(player, player_img_c, facing);
      glance = bless_crossing_glance_tries();
    }
    await app_shared_animation_sleep_quick();
    tries = subtract(tries, 1);
  }
}
