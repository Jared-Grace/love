import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_bless_arrow } from "./app_g_bless_arrow.mjs";
import { g_directions } from "./g_directions.mjs";
export function app_g_bless_arrows(bar, on_turn) {
  arguments_assert(arguments, 2);
  ("The four small buttons that turn the player to look a different way.");
  ("Turning is what decides who you can pray for, so these are the aiming controls and they");
  ("stay on the screen the whole time. Walking is a tap on the ground and needs no button of");
  ("its own; turning has nothing on the map to tap, because there is no tile that means");
  ("please look this way.");
  ("Kept small and side by side along the bottom, where a thumb already is. They are pressed");
  ("far more often than anything else here - a player turns several times for every walk -");
  ("so the cheapest reach on the screen is the right place for them.");
  ("The four come from the same list the character art is drawn in, so a facing can never be");
  ("offered that nobody can be drawn facing.");
  let row = html_div(bar);
  html_style_assign(row, {
    display: "flex",
    "justify-content": "center",
    gap: "0.4rem",
  });
  function lambda$way(way) {
    function turn() {
      on_turn(way);
    }
    let label = app_g_bless_arrow(way);
    let button = app_g_button_green(row, label, turn);
    html_style_assign(button, {
      padding: "0.2rem 0.7rem",
      "font-size": "1.1rem",
      margin: "0",
      width: "auto",
      "min-width": "0",
    });
  }
  let list = g_directions();
  each(list, lambda$way);
  return row;
}
