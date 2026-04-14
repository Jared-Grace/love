import { g_game_prefix } from "../../../love/public/src/g_game_prefix.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { g_icon_cross } from "../../../love/public/src/g_icon_cross.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { g_character_img } from "../../../love/public/src/g_character_img.mjs";
export function app_g_div_map_npcs_add(div_map, npcs) {
  const game_prefix = g_game_prefix();
  function lambda12(npc) {
    let ci = g_character_img(div_map, npc);
    let christian = property_get(npc, "christian");
    if (christian) {
      g_icon_cross(div_map, npc);
    }
  }
  each(npcs, lambda12);
}
