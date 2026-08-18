import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { bless_prayer_transfer } from "./bless_prayer_transfer.mjs";
export function app_g_bless_transfer_overlay(overlay, on_amen) {
  arguments_assert(arguments, 2);
  ("The prayer that gives the whole session to real people, asked BEFORE the game begins.");
  ("It sits here, at the door, rather than at the end, because most players never reach an");
  ("end. Held back as a reward for finishing, it would be the one prayer that everybody who");
  ("stopped early never prayed - and they are the majority. Prayed first, it is already true");
  ("of every blessing that follows while that blessing is being said, and a player who closes");
  ("the tab after two minutes has still prayed for the world they live in.");
  ("Nothing is drawn behind it yet. The first thing on the screen is the player's own words,");
  ("which is the game admitting what it actually is.");
  let container = app_g_container_player(overlay);
  let prayer = bless_prayer_transfer();
  app_g_p_text(container, prayer);
  let praying = emoji_pray();
  let label = text_combine(praying, " Amen");
  app_g_button_green(container, label, on_amen);
}
