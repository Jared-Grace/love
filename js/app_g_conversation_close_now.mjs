import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { g_icon_cross } from "./g_icon_cross.mjs";
import { app_g_sky_snap } from "./app_g_sky_snap.mjs";
export async function app_g_conversation_close_now(
  converts,
  prayed,
  npc,
  div_map,
  overlay_close,
) {
  arguments_assert(arguments, 5);
  if (converts) {
    if (prayed.done) {
      property_set(npc, "christian", true);
      g_icon_cross(div_map, npc);
    }
  }
  await app_g_sky_snap();
  overlay_close();
}
