import { app_shared_container_background_color } from "./app_shared_container_background_color.mjs";
import { app_shared_game_container_color } from "./app_shared_game_container_color.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_game_container_player(overlay) {
  "The panel everything a player reads or presses is drawn on.";
  "It is held in the MIDDLE of whatever it is laid over rather than at the top. A panel is";
  "a few short lines, and pinned to the top of a large screen those lines sit far above";
  "where anybody is looking - a player reported reading them as small print in a corner.";
  "The middle of the screen is where the thing they just tapped was, so it is where their";
  "eyes already are.";
  "It is centred with room ABOVE AND BELOW rather than by being pushed down from the top,";
  "and that is what makes it safe on a small screen. Given more than fits, the room";
  "shrinks away to nothing on its own and the panel starts at the top and scrolls, so a";
  "long conversation on a short phone can still be read from its first line. Pushed down";
  "by a fixed distance, the top of a tall panel would be pushed off the screen and could";
  "not be scrolled back to.";
  "It does nothing at all where there is no room to share out, which is why the same panel";
  "is used for the strip along the bottom of the map. That strip is exactly as tall as what";
  "is in it, so there is no space to be centred within and this is not felt.";
  let color = app_shared_container_background_color();
  let container = app_shared_game_container_color(overlay, color);
  html_style_assign(container, {
    "margin-top": "auto",
    "margin-bottom": "auto",
  });
  return container;
}
