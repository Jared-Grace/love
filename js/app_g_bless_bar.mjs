import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_game_container_player } from "./app_shared_game_container_player.mjs";
import { g_z } from "./g_z.mjs";
export function app_g_bless_bar(container) {
  arguments_assert(arguments, 1);
  ("The strip along the bottom of the screen holding everything the player does and is told");
  ("- what they can see, the prayer, and the four ways to turn.");
  ("Pinned over the map rather than laid out beside it, because the map is the whole screen");
  ("now. A panel that took its own share of the height would take it from the ground the");
  ("player is trying to look across, and seeing how far you can see IS the mechanic.");
  ("Inside it is the same panel every other screen in this family is drawn on, so the words");
  ("and the buttons here read exactly as they do everywhere else. Only where it sits is new;");
  ("what it looks like was already decided.");
  ("It sits above the map and below anything that stops the game - a prayer being read");
  ("covers this, because at that moment nothing else is to be pressed.");
  let pinned = html_div(container);
  html_style_assign(pinned, {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    "z-index": g_z("click"),
  });
  let bar = app_shared_game_container_player(pinned);
  return bar;
}
