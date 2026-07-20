import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { g_prayer_study } from "./g_prayer_study.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
export function app_g_prayer_study_overlay() {
  "a brief prayer moment shown when the player finishes studying a passage — a randomized study prayer (g_prayer_study: thank God for Scripture, or ask Him to open eyes/ears and apply it rightly) in the player's green voice, auto-dismissing like the gratitude prayer";
  let color = app_shared_color_green_light();
  let prayer = g_prayer_study();
  function dismissed() {}
  app_g_message_overlay(emoji_pray(), prayer, color, 3500, dismissed);
}
