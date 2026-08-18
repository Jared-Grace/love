import { arguments_assert } from "./arguments_assert.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_on } from "./html_on.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { list_add } from "./list_add.mjs";
import { math_min } from "./math_min.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_arrows } from "./app_g_bless_arrows.mjs";
import { app_g_bless_bar } from "./app_g_bless_bar.mjs";
import { app_g_bless_glows } from "./app_g_bless_glows.mjs";
import { app_g_bless_map } from "./app_g_bless_map.mjs";
import { app_g_bless_readout } from "./app_g_bless_readout.mjs";
import { app_g_bless_transfer_overlay } from "./app_g_bless_transfer_overlay.mjs";
import { app_g_bless_walk } from "./app_g_bless_walk.mjs";
import { app_g_bless_wash } from "./app_g_bless_wash.mjs";
import { app_g_bless_world_new } from "./app_g_bless_world_new.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
import { app_g_event_target_closest_tile } from "./app_g_event_target_closest_tile.mjs";
import { app_g_overlay_container } from "./app_g_overlay_container.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
import { app_g_tile_coordinates_get } from "./app_g_tile_coordinates_get.mjs";
import { bless_blessing } from "./bless_blessing.mjs";
import { bless_cone } from "./bless_cone.mjs";
import { bless_cone_view } from "./bless_cone_view.mjs";
import { bless_depth_start } from "./bless_depth_start.mjs";
import { bless_prayer_text } from "./bless_prayer_text.mjs";
import { bless_summary_earned } from "./bless_summary_earned.mjs";
import { bless_view_count } from "./bless_view_count.mjs";
export function app_g_bless_overlay(container_map) {
  arguments_assert(arguments, 1);
  ("The praying game: a world seen from above and filling the screen, the player standing in");
  ("the middle of it, the ground they are looking across washed pale, and one button that");
  ("prays for everybody in it.");
  ("Two things move the cone and they are the two verbs the game has. Turning swings it,");
  ("from four small arrows along the bottom where a thumb already is. Walking carries it,");
  ("from a tap on any tile - the player walks there a step at a time and what they can see");
  ("changes the whole way, so a walk is not travel between two screens, it is the game.");
  ("You still cannot tap a person. Aiming is the verb, and a tap that blessed somebody");
  ("standing behind you would delete it. Tapping the ground moves you until they are in");
  ("front of you, which is the same wish answered the way this game answers it.");
  ("The prayer is on the button rather than beside it, so the player reads the words as they");
  ("pray them. Reading the prayer is the player's part of this game; a label they skipped");
  ("would leave the game praying by itself, which is the one thing it must never do.");
  ("The map is drawn once and never again. Only the wash, the readout and the button are");
  ("redrawn, because rebuilding the map would replace the very picture that is sliding and");
  ("the player would jump rather than walk.");
  let world = app_g_bless_world_new();
  let player = property_get(world, "player");
  let npcs = property_get(world, "npcs");
  let street = property_get(world, "street");
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
  let unlocked = 1;
  let blessings = [];
  let walking = false;
  function cone_get() {
    let x = property_get(player, "x");
    let y = property_get(player, "y");
    let direction = property_get(player, "direction");
    let depth = bless_depth_start();
    let cone = bless_cone(x, y, direction, depth);
    return cone;
  }
  function render() {
    let cone = cone_get();
    app_g_bless_wash(wash, cone);
    html_clear(told);
    let view = bless_cone_view(cone, npcs);
    let visible = bless_view_count(view);
    let count = math_min(unlocked, visible);
    app_g_bless_readout(told, cone, street, visible, count);
    function pray() {
      "the glow goes on first and the screen is left alone for a moment, because a redraw would replace the very elements that are glowing - the blessing has to be watched landing before the board can move on";
      app_g_bless_glows(glows, view);
      let at = date_now_milliseconds();
      let blessing = bless_blessing(count, at);
      list_add(blessings, blessing);
      let earned = bless_summary_earned(blessings);
      if (earned) {
        unlocked = multiply(unlocked, 2);
      }
      function done() {
        html_clear(glows);
        render();
      }
      setTimeout(done, 1800);
    }
    let anybody = greater_than(count, 0);
    if (anybody) {
      let prayer = bless_prayer_text(count);
      app_g_button_green(told, prayer, pray);
    }
  }
  function turned(way) {
    app_g_character_face(player, player_img_c, way);
    render();
  }
  app_g_bless_arrows(bar, turned);
  async function tapped(e) {
    "a tap while already walking is ignored rather than queued. the player can see where they are going, and a second destination taken mid-walk would send them somewhere they chose before they knew what the first walk would show them";
    if (walking) {
      return;
    }
    let tile = app_g_event_target_closest_tile(e);
    if (not(tile)) {
      return;
    }
    let target = app_g_tile_coordinates_get(tile);
    walking = true;
    await app_g_bless_walk(world, target, player_img_c, div_map, render);
    walking = false;
    render();
  }
  html_on(div_map, "click", tapped);
  render();
  app_g_player_center(player, player_img_c, div_map);
  ("the world is built and drawn behind this before it is covered, so the first thing after the amen is a world already standing rather than a wait");
  let transfer = app_g_overlay_container(container_map);
  function begun() {
    html_remove(transfer);
  }
  app_g_bless_transfer_overlay(transfer, begun);
  return transfer;
}
