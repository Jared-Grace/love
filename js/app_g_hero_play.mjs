import { arguments_assert } from "./arguments_assert.mjs";
import { g_player_img_female_get } from "./g_player_img_female_get.mjs";
import { app_g_bless_world_new } from "./app_g_bless_world_new.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_map_scrolling } from "./app_g_bless_map_scrolling.mjs";
import { html_div } from "./html_div.mjs";
import { bless_crossing_draw } from "./bless_crossing_draw.mjs";
import { bless_doors_draw } from "./bless_doors_draw.mjs";
import { app_g_bless_windows_draw } from "./app_g_bless_windows_draw.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { bless_edge_new } from "./bless_edge_new.mjs";
import { app_g_hero_evil_color } from "./app_g_hero_evil_color.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_g_hero_fx_layer } from "./app_g_hero_fx_layer.mjs";
import { bless_camera_people_set } from "./bless_camera_people_set.mjs";
import { app_g_hero_edge } from "./app_g_hero_edge.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_hero_tapped } from "./app_g_hero_tapped.mjs";
import { html_on } from "./html_on.mjs";
import { app_shared_game_player_center } from "./app_shared_game_player_center.mjs";
import { app_g_bless_people_walk } from "./app_g_bless_people_walk.mjs";
import { app_g_bless_vehicles_drive } from "./app_g_bless_vehicles_drive.mjs";
import { app_g_hero_evil_spawn } from "./app_g_hero_evil_spawn.mjs";
export function app_g_hero_play(container_map) {
  arguments_assert(arguments, 1);
  ("The whole game, built on the praying game's street: the same world, the same map, the same walking crowd, the same traffic and the same walk for the player. What is this game's own is the one evil person, the fire, and the player being a woman.");
  ("The edge arrow is the praying game's own, recoloured to the red an evil person wears, so a player who cannot see the killer still knows which way to run.");
  ("The arrow measures the screen above a bar of buttons. This game has no buttons, so it is handed a bar with no height at all and measures the whole screen.");
  let player_img = g_player_img_female_get();
  let world = app_g_bless_world_new(player_img);
  let player = property_get(world, "player");
  let npcs = property_get(world, "npcs");
  let blocks = property_get(world, "blocks");
  let drawn = app_g_bless_map_scrolling(container_map, world);
  let div_map = property_get(drawn, "div_map");
  let player_img_c = property_get(drawn, "player_img_c");
  let crossings = html_div(div_map);
  bless_crossing_draw(crossings, blocks);
  let doors = html_div(div_map);
  bless_doors_draw(doors, blocks);
  let windows = html_div(div_map);
  app_g_bless_windows_draw(windows, blocks);
  let bar = html_div(container_map);
  html_style_assign(bar, {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    height: "0",
  });
  let edge = bless_edge_new(container_map);
  let outer = property_get(edge, "outer");
  let color = app_g_hero_evil_color();
  html_style_set(outer, "color", color);
  let fx = app_g_hero_fx_layer(container_map);
  bless_camera_people_set(container_map, npcs);
  let hero = {
    container_map,
    world,
    player,
    div_map,
    player_img_c,
    bar,
    edge,
    fx,
    evil: null,
    busy: false,
  };
  function render() {
    app_g_hero_edge(hero);
  }
  property_set(hero, "render", render);
  let tapped = app_g_hero_tapped(hero);
  html_on(div_map, "click", tapped);
  render();
  app_shared_game_player_center(player, player_img_c, div_map);
  app_g_bless_people_walk(world, render);
  app_g_bless_vehicles_drive(world, container_map);
  app_g_hero_evil_spawn(hero);
  return hero;
}
