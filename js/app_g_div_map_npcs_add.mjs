import { g_game_prefix } from "./g_game_prefix.mjs";
import { each } from "./each.mjs";
import { g_icon_cross } from "./g_icon_cross.mjs";
import { property_get } from "./property_get.mjs";
import { g_character_img } from "./g_character_img.mjs";
export function app_g_div_map_npcs_add(div_map, npcs) {
  let game_prefix = g_game_prefix();
  function lambda(npc) {
    let ci = g_character_img(div_map, npc);
    let christian = property_get(npc, "christian");
    if (christian) {
      g_icon_cross(div_map, npc);
    }
  }
  each(npcs, lambda);
}
