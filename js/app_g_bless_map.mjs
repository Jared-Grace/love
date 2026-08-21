import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_div } from "./html_div.mjs";
import { property_get } from "./property_get.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { app_shared_game_div_map_style_rows } from "./app_shared_game_div_map_style_rows.mjs";
import { app_shared_game_div_map_tiles_add_rows } from "./app_shared_game_div_map_tiles_add_rows.mjs";
import { app_g_map_room_new } from "./app_g_map_room_new.mjs";
import { app_g_npc_img_set } from "./app_g_npc_img_set.mjs";
import { g_character_img } from "./g_character_img.mjs";
export function app_g_bless_map(container, world) {
  arguments_assert(arguments, 2);
  ("The whole world drawn full screen, the way the gospel game draws its own: a room of open");
  ("water, the grid of tiles inside it, everybody standing where they stand, and the player");
  ("among them.");
  ("Every piece of this is that game's piece. The room exists so the player can still sit in");
  ("the middle of the screen while standing on the outermost tile; the tiles carry their own");
  ("coordinates so a tap can say where it landed; the people are positioned by the same");
  ("style that slides them when they move. None of that is a choice this game gets to make");
  ("differently - a map that walked differently would just be a worse version of the one");
  ("next door.");
  ("The scroller is remembered on the grid under the name the centring code looks it up by,");
  ("so keeping the player in the middle of the screen also works here untouched.");
  ("The wash goes in before the people so a tinted tile can never cover somebody standing on");
  ("it - the tint is ground, and the ground is under your feet.");
  let rows = property_get(world, "rows");
  let player = property_get(world, "player");
  let npcs = property_get(world, "npcs");
  let room = app_g_map_room_new(container);
  let div_map = html_div(room);
  property_set_exists_not(div_map, "container", container);
  app_shared_game_div_map_style_rows(div_map, rows);
  app_shared_game_div_map_tiles_add_rows(div_map, rows);
  let wash = html_div(div_map);
  ("each person's picture is written down under who they are, because the mover that walks");
  ("them looks it up that way and by no other route - a person drawn without being");
  ("remembered is a person the crowd can never take a step for.");
  function person_draw(person) {
    let ci = g_character_img(div_map, person);
    app_g_npc_img_set(person, ci);
  }
  each(npcs, person_draw);
  let player_img_c = g_character_img(div_map, player);
  let drawn = {
    div_map: div_map,
    wash: wash,
    player_img_c: player_img_c,
  };
  return drawn;
}
