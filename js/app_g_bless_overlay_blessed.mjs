import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_world_new } from "./app_g_bless_world_new.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_bless_map } from "./app_g_bless_map.mjs";
import { app_g_bless_bar } from "./app_g_bless_bar.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { bless_told_tap } from "./bless_told_tap.mjs";
import { bless_blessed_new } from "./bless_blessed_new.mjs";
export function app_g_bless_overlay_blessed(container_map) {
  arguments_assert(arguments, 1);
  let world = app_g_bless_world_new();
  let player = property_get(world, "player");
  let npcs = property_get(world, "npcs");
  let blocks = property_get(world, "blocks");
  let scroller = html_div(container_map);
  html_style_assign(scroller, {
    position: "absolute",
    inset: "0",
    overflow: "auto",
  });
  let drawn = app_g_bless_map(scroller, world);
  let div_map = property_get(drawn, "div_map");
  let wash = property_get(drawn, "wash");
  let player_img_c = property_get(drawn, "player_img_c");
  let glows = html_div(div_map);
  let bar = app_g_bless_bar(container_map);
  let told = html_div(bar);
  let name = bless_told_tap();
  app_g_p_text(told, name);
  ("the ladder starts at one person, and every rung above it is earned rather than begun");
  ("with - so the first prayer of a new game reaches exactly the person it is said over");
  let rung = "person";
  let blessed = bless_blessed_new();
  let r = {
    container_map,
    world,
    player,
    npcs,
    blocks,
    div_map,
    wash,
    player_img_c,
    glows,
    bar,
    told,
    rung,
    blessed,
  };
  return r;
}
