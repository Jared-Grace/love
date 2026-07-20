import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
export function app_g_prayer_study_overlay(prayer, on_dismiss) {
  "a brief prayer moment (the player's green voice, auto-dismissing like the gratitude prayer) showing `prayer`, then calling on_dismiss — used to BOOKEND a study: an illumination petition before it opens, a thanksgiving after it closes";
  let color = app_shared_color_green_light();
  app_g_message_overlay(emoji_pray(), prayer, color, 3500, on_dismiss);
}
