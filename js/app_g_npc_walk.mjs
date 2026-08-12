import { g_path_steps } from "./g_path_steps.mjs";
import { g_img_square_slide_seconds } from "./g_img_square_slide_seconds.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_npc_move } from "./app_g_npc_move.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { each_async } from "./each_async.mjs";
export async function app_g_npc_walk(npc, path) {
  "take one person the whole way along a path on their own feet - one tile at a time, each slide finished before the next is begun, the way the player crosses the same ground";
  "a single move is only ever right for a single tile. asked to cover a distance it slides the picture straight to the far end, across walls and through whoever is standing between, because a slide knows the two tiles it is given and nothing at all of what lies between them";
  let steps = g_path_steps(path);
  let seconds = g_img_square_slide_seconds();
  async function walk(step) {
    let to = property_get(step, "to");
    app_g_npc_move(npc, to, 0);
    await sleep_seconds(seconds);
  }
  await each_async(steps, walk);
}
