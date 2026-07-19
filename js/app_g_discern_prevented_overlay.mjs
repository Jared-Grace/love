import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { app_shared_color_gold_text } from "./app_shared_color_gold_text.mjs";
import { g_verse_hs_warning_next } from "./g_verse_hs_warning_next.mjs";
import { property_get } from "./property_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_scripture_verse } from "./app_g_scripture_verse.mjs";
import { app_g_overlay_fonts } from "./app_g_overlay_fonts.mjs";
import { noop } from "./noop.mjs";
export function app_g_discern_prevented_overlay(dismiss_ms) {
  "the Holy Spirit gently preventing the FIRST disregard of discernment: full-screen glowing 🕊️ + GOLD message (God's leading = His word) + a ROTATING Scripture about the Spirit's leading (gold, since it's God's word; reference white). auto-dismisses after dismiss_ms — the real flow passes ~5000ms; the #dove dev route passes null so it stays for inspection";
  let fonts = app_g_overlay_fonts();
  let color = app_shared_color_gold_text();
  let message = "The Holy Spirit is leading you to follow the discernment God gave you";
  let card = app_g_message_overlay(emoji_dove(), message, color, dismiss_ms, noop);
  let drawn = g_verse_hs_warning_next();
  let verse = html_p_text(card, property_get(drawn, "text"));
  html_style_assign(verse, {
    "font-size": fonts.verse,
    margin: "0",
    "max-width": "80vw",
    "text-align": "center",
  });
  app_g_scripture_verse(verse);
  let reference = html_p_text(card, property_get(drawn, "reference"));
  html_style_assign(reference, {
    color: "white",
    "font-size": fonts.reference,
    margin: "0",
    "text-align": "center",
  });
  return card;
}
