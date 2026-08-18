import { app_g_bless_overlay_player } from "./app_g_bless_overlay_player.mjs";
import { app_g_bless_overlay_pray } from "./app_g_bless_overlay_pray.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_on } from "./html_on.mjs";
import { html_remove } from "./html_remove.mjs";
import { math_min } from "./math_min.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_arrows } from "./app_g_bless_arrows.mjs";
import { app_g_bless_readout } from "./app_g_bless_readout.mjs";
import { app_g_bless_transfer_overlay } from "./app_g_bless_transfer_overlay.mjs";
import { app_g_bless_walk } from "./app_g_bless_walk.mjs";
import { app_g_bless_wash } from "./app_g_bless_wash.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
import { app_g_event_target_closest_tile } from "./app_g_event_target_closest_tile.mjs";
import { app_g_overlay_container } from "./app_g_overlay_container.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
import { app_g_tile_coordinates_get } from "./app_g_tile_coordinates_get.mjs";
import { bless_cone_view } from "./bless_cone_view.mjs";
import { bless_prayer_text } from "./bless_prayer_text.mjs";
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
  let r = app_g_bless_overlay_player(container_map);
  let player = property_get(r, "player");
  let npcs = property_get(r, "npcs");
  let street = property_get(r, "street");
  let div_map = property_get(r, "div_map");
  let wash = property_get(r, "wash");
  let player_img_c = property_get(r, "player_img_c");
  let glows = property_get(r, "glows");
  let bar = property_get(r, "bar");
  let told = property_get(r, "told");
  let unlocked = property_get(r, "unlocked");
  let blessings = property_get(r, "blessings");
  let cone_get = property_get(r, "cone_get");
  let r2 = property_get(r, "r2");
  let world = property_get(r2, "world");
  let walking = property_get(r2, "walking");
  function render() {
    let cone = cone_get();
    app_g_bless_wash(wash, cone);
    html_clear(told);
    let view = bless_cone_view(cone, npcs);
    let visible = bless_view_count(view);
    let count = math_min(unlocked, visible);
    app_g_bless_readout(told, cone, street, visible, count);
    function pray() {
      let app_g_bless_overlay_pray_answer = app_g_bless_overlay_pray(
        glows,
        view,
        count,
        blessings,
        unlocked,
        render,
      );
      unlocked = property_get(app_g_bless_overlay_pray_answer, "unlocked");
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
