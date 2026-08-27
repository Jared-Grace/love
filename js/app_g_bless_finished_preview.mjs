import { app_shared_game_player_style_initialize } from "./app_shared_game_player_style_initialize.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { g_img_square_size_variable } from "./g_img_square_size_variable.mjs";
import { app_g_bless_tile_size } from "./app_g_bless_tile_size.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_bless_world_new } from "./app_g_bless_world_new.mjs";
import { html_div } from "./html_div.mjs";
import { app_g_bless_map } from "./app_g_bless_map.mjs";
import { property_get } from "./property_get.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { list_get } from "./list_get.mjs";
import { list_first } from "./list_first.mjs";
import { bless_told_reach } from "./bless_told_reach.mjs";
import { bless_blessed_new } from "./bless_blessed_new.mjs";
import { app_g_bless_homes } from "./app_g_bless_homes.mjs";
import { bless_blessed_add } from "./bless_blessed_add.mjs";
import { bless_blessed_tiles } from "./bless_blessed_tiles.mjs";
import { app_g_bless_finished } from "./app_g_bless_finished.mjs";
import { app_shared_game_button_green } from "./app_shared_game_button_green.mjs";
import { app_shared_game_player_center } from "./app_shared_game_player_center.mjs";
import { sleep } from "./sleep.mjs";
export async function app_g_bless_finished_preview() {
  "The praying game's celebration on its own - one household lit, and the whole run of it";
  "played over a real street, with a button to watch it again. It is a dev screen of this
  game, reached from the tools pill on the street or by asking for #bless_finished.";
  "A real world is built and drawn with the game's own drawing rather than a grid stood in";
  "for one, because half of what is being judged here is timing against real ground: how";
  "long the view takes to arrive, how far the light spreads over a house, and whether the";
  "house underneath reads as finished once the light has gone.";
  "Nobody walks, nobody can be tapped, and the strip of buttons is left off. What is being";
  "watched is one sequence, and a street moving about behind it is a second thing competing";
  "for the same pair of eyes.";
  app_shared_game_player_style_initialize();
  let cover = html_body_div();
  let variable = g_img_square_size_variable();
  let tile_size = app_g_bless_tile_size();
  html_style_variable_set(cover, variable, tile_size);
  html_style_assign(cover, {
    position: "fixed",
    inset: "0",
    overflow: "hidden",
    background: "black",
  });
  let world = app_g_bless_world_new();
  let scroller = html_div(cover);
  html_style_assign(scroller, {
    position: "absolute",
    inset: "0",
    overflow: "auto",
  });
  let drawn = app_g_bless_map(scroller, world);
  let div_map = property_get(drawn, "div_map");
  let player_img_c = property_get(drawn, "player_img_c");
  ("The lit ground is its own layer over the tiles, made the same way and in the same place");
  ("the game makes it, so the house revealed at the end is the very thing a player sees.");
  let homes = html_div(div_map);
  let blocks = property_get(world, "blocks");
  let player = property_get(world, "player");
  let r = {
    container_map: cover,
    div_map: div_map,
    player_img_c: player_img_c,
    world: world,
  };
  ("A house in the middle of the first block, so the view has somewhere to travel from and");
  ("the player is still on screen when it comes back.");
  let buildings = bless_place_members("block", 0);
  let building = list_get(buildings, 2);
  let households = bless_place_members("building", building);
  let household = list_first(households);
  let line = bless_told_reach("household");
  async function play() {
    "The record is made afresh every time rather than undone, so watching it twice is";
    "watching the same thing twice.";
    let empty = bless_blessed_new();
    app_g_bless_homes(homes, empty, blocks);
    let blessed = bless_blessed_new();
    bless_blessed_add(blessed, "household", household);
    app_g_bless_homes(homes, blessed, blocks);
    let tiles = bless_blessed_tiles(blessed, blocks);
    await app_g_bless_finished(r, tiles, line);
  }
  let strip = html_div(cover);
  html_style_assign(strip, {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "0.6em",
    "z-index": "500",
  });
  app_shared_game_button_green(strip, "Watch it again", play);
  await app_shared_game_player_center(player, player_img_c, div_map);
  await sleep(700);
  await play();
}
