import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_view_render } from "./app_g_view_render.mjs";
import { list_single } from "./list_single.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_click_npc(div_map, npcs_matched) {
  let npc = list_single(npcs_matched);
  let x = property_get(npc, "x");
  let y = property_get(npc, "y");
  await app_g_view_set({
    kind: "npc",
    x,
    y,
  });
  await app_g_view_render(div_map);
}
