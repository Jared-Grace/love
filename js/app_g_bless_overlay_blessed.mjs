import { arguments_assert } from "./arguments_assert.mjs";
import { g_player_img_get } from "./g_player_img_get.mjs";
import { bless_street_new } from "./bless_street_new.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { app_g_bless_bar } from "./app_g_bless_bar.mjs";
import { app_g_bless_told } from "./app_g_bless_told.mjs";
import { bless_edge_new } from "./bless_edge_new.mjs";
import { bless_camera_people_set } from "./bless_camera_people_set.mjs";
import { bless_blessed_new } from "./bless_blessed_new.mjs";
import { app_g_bless_blessed_head_start } from "./app_g_bless_blessed_head_start.mjs";
export function app_g_bless_overlay_blessed(container_map) {
  arguments_assert(arguments, 1);
  let player_img = g_player_img_get();
  let street = bless_street_new(container_map, player_img);
  let world = property_get(street, "world");
  let drawn = property_get(street, "drawn");
  let div_map = property_get(drawn, "div_map");
  let wash = property_get(drawn, "wash");
  let player_img_c = property_get(drawn, "player_img_c");
  let player = property_get(world, "player");
  let npcs = property_get(world, "npcs");
  let blocks = property_get(world, "blocks");
  ("The layer the lit houses are drawn on, made BEFORE the glows so that it sits under");
  ("them. Both lie flat on the ground, so which one is made first is the whole of what");
  ("decides which covers the other - and a halo saying somebody has been prayed for must");
  ("never be dimmed by the ground they happen to be standing on.");
  let homes = html_div(div_map);
  let glows = html_div(div_map);
  let bar = app_g_bless_bar(container_map);
  let told = app_g_bless_told(bar);
  ("The arrow that leans off the edge of the screen towards the next person to pray for. It");
  ("is made here, once, with the frame it hangs on - and made AFTER the buttons so that a");
  ("hint can never end up underneath the thing a thumb is reaching for.");
  let edge = bless_edge_new(container_map);
  ("The map is told who is walking about on it, because a camera journey has to stop them");
  ("where they stand for the length of the journey. It is said once, here, where the crowd");
  ("and the map first exist together - and every camera move made from this map afterwards");
  ("is covered without anything in between having to carry the crowd about.");
  bless_camera_people_set(container_map, npcs);
  let blessed = bless_blessed_new();
  ("A new record is empty, except when the address asked for a world part way through. That");
  ("is asked here, at the one moment there is a record and nobody has prayed into it yet -");
  ("later would be writing over the player's own work, and earlier there is nothing to write");
  ("into.");
  ("The rung comes back from the same place rather than being written out here. The ladder");
  ("starts at one person and every rung above it is EARNED, so the first prayer of a new");
  ("game reaches exactly the person it is said over - but an opening that hands over an");
  ("already finished household has earned the one above it, and a rung spelled out here");
  ("would have been a second opinion about that. Whatever writes the prayers in is what");
  ("knows what they won.");
  let rung = app_g_bless_blessed_head_start(blessed);
  let r = {
    container_map,
    world,
    player,
    npcs,
    blocks,
    div_map,
    wash,
    player_img_c,
    homes,
    glows,
    bar,
    told,
    edge,
    rung,
    blessed,
  };
  return r;
}
