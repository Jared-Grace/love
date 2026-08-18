import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_add } from "./list_add.mjs";
import { math_min } from "./math_min.mjs";
import { multiply } from "./multiply.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { app_g_bless_crowd } from "./app_g_bless_crowd.mjs";
import { app_g_bless_grid } from "./app_g_bless_grid.mjs";
import { app_g_bless_readout } from "./app_g_bless_readout.mjs";
import { app_g_bless_span } from "./app_g_bless_span.mjs";
import { app_g_bless_street } from "./app_g_bless_street.mjs";
import { app_g_bless_transfer_overlay } from "./app_g_bless_transfer_overlay.mjs";
import { app_g_bless_turn_buttons } from "./app_g_bless_turn_buttons.mjs";
import { app_g_bless_world } from "./app_g_bless_world.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_emoji_glow_apply } from "./app_g_emoji_glow_apply.mjs";
import { app_g_overlay_container } from "./app_g_overlay_container.mjs";
import { bless_blessing } from "./bless_blessing.mjs";
import { bless_cone } from "./bless_cone.mjs";
import { bless_cone_view } from "./bless_cone_view.mjs";
import { bless_depth_start } from "./bless_depth_start.mjs";
import { bless_prayer_text } from "./bless_prayer_text.mjs";
import { bless_summary_earned } from "./bless_summary_earned.mjs";
import { bless_view_count } from "./bless_view_count.mjs";
export function app_g_bless_overlay(container_map) {
  arguments_assert(arguments, 1);
  ("The prayer game, small enough to look at: a patch of ground seen from above, the cone the");
  ("player is looking down washed lighter, and one button that prays for everybody in it.");
  ("The whole loop is here and nothing else is - no walking, no travel, no world. What it");
  ("exists to answer is the one question no reasoning settles: how a cone FEELS. Whether");
  ("three tiles deep is a crowd or an empty field, and whether turning to find people is a");
  ("pleasure or a chore, are judgements that need eyes on a screen.");
  ("The prayer is on the button rather than beside it, so the player reads the words as they");
  ("pray them. Reading the prayer is the player's part of this game; a label they skipped");
  ("would leave the game praying by itself, which is the one thing it must never do.");
  ("Praying lights the people it covers with the gold glow, and only them. The glow is the");
  ("proof the count was honest - a player can see two people lit and know that both are who");
  ("the words just named.");
  let overlay = app_g_overlay_container(container_map);
  let people = app_g_bless_crowd();
  let street = app_g_bless_street();
  let direction = "north";
  let unlocked = 1;
  let blessings = [];
  function render() {
    html_clear(overlay);
    let container = app_g_container_player(overlay);
    let depth = bless_depth_start();
    let cone = bless_cone(0, 0, direction, depth);
    let span = app_g_bless_span();
    let world = app_g_bless_world(cone, people, street, span);
    let markers = app_g_bless_grid(container, world);
    let view = bless_cone_view(cone, people);
    let visible = bless_view_count(view);
    let count = math_min(unlocked, visible);
    app_g_bless_readout(container, cone, street, visible, count);
    function turned(way) {
      direction = way;
      render();
    }
    app_g_bless_turn_buttons(container, turned);
    function pray() {
      "the glow goes on first and the screen is left alone for a moment, because a redraw would replace the very elements that are glowing - the blessing has to be watched landing before the board can move on";
      each(markers, app_g_emoji_glow_apply);
      let at = date_now_milliseconds();
      let blessing = bless_blessing(count, at);
      list_add(blessings, blessing);
      let earned = bless_summary_earned(blessings);
      if (earned) {
        unlocked = multiply(unlocked, 2);
      }
      setTimeout(render, 1800);
    }
    let anybody = greater_than(count, 0);
    if (anybody) {
      let prayer = bless_prayer_text(count);
      app_g_button_green(container, prayer, pray);
    }
  }
  app_g_bless_transfer_overlay(overlay, render);
  return overlay;
}
