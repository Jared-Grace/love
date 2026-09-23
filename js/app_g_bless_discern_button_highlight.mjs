import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_g_bless_discern_button_highlight(button) {
  arguments_assert(arguments, 1);
  ("Makes the who next button glow gold for a few seconds, so a player who has just said");
  ("their first prayer sees where to ask who to pray for next.");
  ("It is needed because the street no longer points anywhere on its own. After a first");
  ("prayer nothing on the map says where to go, and the one control that answers that is a");
  ("button the player has not yet had any reason to look at.");
  ("It STOPS by itself. The glow runs a fixed number of times and ends, so nothing has to");
  ("remember to take it down, and a button that glowed for good would be read as a warning");
  ("rather than as a suggestion.");
  let gold = app_shared_color_gold_glow();
  let keyframe = `@keyframes app_g_bless_discern_pulse { 0% { box-shadow: 0 0 0 0 ${gold}; transform: scale(1); } 100% { box-shadow: 0 0 1.2em 0.45em ${gold}; transform: scale(1.08); } }`;
  html_style_head(keyframe);
  html_style_set(
    button,
    "animation",
    "app_g_bless_discern_pulse 0.8s ease-in-out 10 alternate",
  );
}
