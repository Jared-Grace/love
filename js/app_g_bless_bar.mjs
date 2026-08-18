import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_z } from "./g_z.mjs";
export function app_g_bless_bar(container) {
  arguments_assert(arguments, 1);
  ("The strip along the bottom of the screen holding everything the player does and is told");
  ("- what they can see, the prayer, and the four ways to turn.");
  ("Pinned over the map rather than laid out beside it, because the map is the whole screen");
  ("now. A panel that took its own share of the height would take it from the ground the");
  ("player is trying to look across, and seeing how far you can see IS the mechanic.");
  ("It sits above the map and below anything that stops the game - a prayer being read");
  ("covers this, because at that moment nothing else is to be pressed.");
  ("Its own taps stay in it. A tap meant for a button here must never also land on the tile");
  ("behind it and send the player walking off across the world.");
  let bar = html_div(container);
  html_style_assign(bar, {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "0.4rem",
    background: "rgba(0, 0, 0, 0.55)",
    "z-index": g_z("click"),
    "text-align": "center",
  });
  return bar;
}
