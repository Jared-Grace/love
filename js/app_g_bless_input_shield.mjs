import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_z } from "./g_z.mjs";
export function app_g_bless_input_shield(container_map) {
  arguments_assert(arguments, 1);
  ("An invisible sheet laid over the whole screen for as long as a celebration is running,");
  ("so that nothing the player presses during it is taken. Handed back so that whatever put");
  ("it up can take it away again.");
  ("A celebration is the one stretch of this game where the screen is saying something and");
  ("the player is meant to be watching rather than doing. A tap taken during it walks the");
  ("player away from the very thing being shown to them, and a turn taken during it swings");
  ("the view off the faces that are lighting up - both of them landing halfway through a");
  ("camera journey the game had already committed to.");
  ("A SHEET rather than a flag each control asks about. A flag has to be reached by the map");
  ("and by the buttons and by anything added to the bar later, and it is wrong the day");
  ("somebody adds a control and does not know to ask - the failure being a tap that works");
  ("when it should not, which nothing goes red about. A sheet covers whatever is underneath");
  ("it, including controls that did not exist when this was written.");
  ("It is put up and taken down by ONE run, so it cannot be left behind. A flag set in one");
  ("place and cleared in another is a game that stops answering the first time a");
  ("celebration ends by a path nobody thought about.");
  ("It sits above the strip of buttons and below anything that stops the game, so a panel");
  ("with a button on it is still pressable through nothing. The panels put themselves up");
  ("higher than this, and they hold the player up by themselves anyway - which is why this");
  ("comes down as the words go up.");
  ("It is see-through and NOT a dimming. The whole point of the moment is that the street");
  ("is being looked at, so shading it would hide the thing being guarded.");
  let shield = html_div(container_map);
  html_style_assign(shield, {
    position: "absolute",
    inset: "0",
    background: "transparent",
    "z-index": g_z("tint"),
  });
  return shield;
}
