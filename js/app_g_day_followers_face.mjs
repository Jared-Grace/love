import { g_img_square_slide_seconds } from "./g_img_square_slide_seconds.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { app_g_day_follower_ahead } from "./app_g_day_follower_ahead.mjs";
import { g_distance_1 } from "./g_distance_1.mjs";
import { g_direction } from "./g_direction.mjs";
import { app_g_npc_face } from "./app_g_npc_face.mjs";
import { each_index } from "./each_index.mjs";
import { not } from "./not.mjs";
export async function app_g_day_followers_face(player) {
  "the walk is over: everybody in the line turns to look at the person in front of them";
  "while they are walking each of them faces the way they are going, which is right for a walk and wrong for a stop. the line rounds a corner and the ones still short of it are left staring at a wall, and the one at the front ends up looking straight past the player instead of at them. turning once at rest costs nothing and reads as a line of people attending to whoever they are following";
  "the one at the back is still sliding when the walk is handed back - the line was let go one after another - so this waits out a slide first. turning them mid-stride would be the same bug the other way round: walking the last tile facing sideways";
  "only somebody standing right beside the one in front is turned. a believer gathered before the day had been walked far enough to leave a tile for them is not in the shape of the line yet, and pointing them at somebody several tiles off would be a guess";
  let seconds = g_img_square_slide_seconds();
  await sleep_seconds(seconds);
  let followers = app_g_day_state_property("followers");
  function face(npc, index) {
    let ahead = app_g_day_follower_ahead(player, followers, index);
    let beside = g_distance_1(npc, ahead);
    if (not(beside)) {
      return;
    }
    let direction = g_direction(npc, ahead);
    app_g_npc_face(npc, direction);
  }
  each_index(followers, face);
}
