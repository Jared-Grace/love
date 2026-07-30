import { app_g_map_room_new } from "./app_g_map_room_new.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_div_map_tiles_add } from "./app_g_div_map_tiles_add.mjs";
import { app_g_div_map_style } from "./app_g_div_map_style.mjs";
import { app_g_div_map_npcs_add } from "./app_g_div_map_npcs_add.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { html_div } from "./html_div.mjs";
export async function app_g_div_map_new(div_map_container) {
  let npcs = await app_g_npcs_get();
  ("the grid sits inside a ROOM of open water (",
    app_g_map_room_new.name,
    ") rather than directly in the scroller, so there is somewhere to scroll to when the player stands at the edge of the world. the room is only around the grid, never inside it: characters are positioned against the grid's own corner and the click listener is on the grid, so both are untouched by the room");
  let room = app_g_map_room_new(div_map_container);
  let div_map = html_div(room);
  property_set_exists_not(div_map, "container", div_map_container);
  app_g_div_map_npcs_add(div_map, npcs);
  await app_g_div_map_style(div_map);
  await app_g_div_map_tiles_add(div_map);
  return div_map;
}
