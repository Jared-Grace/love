import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { app_shared_color_gold_text } from "./app_shared_color_gold_text.mjs";
export function app_g_discern_prevented_overlay() {
  "the Holy Spirit gently preventing the FIRST disregard of discernment: full-screen glowing 🕊️ + GOLD message (God's leading = His word), auto-dismissing after enough time to read";
  let color = app_shared_color_gold_text();
  let message = "The Holy Spirit is leading you to follow the discernment God gave you";
  let div = app_g_message_overlay(emoji_dove(), message, color, 5000);
  return div;
}
