import { app_g_overlay_verse_add } from "./app_g_overlay_verse_add.mjs";
import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { app_shared_color_gold_text } from "./app_shared_color_gold_text.mjs";
import { g_verse_hs_warning_next } from "./g_verse_hs_warning_next.mjs";
import { noop } from "./noop.mjs";
export function app_g_discern_prevented_overlay(dismiss_ms) {
  "the Holy Spirit gently preventing a disregard of discernment — EVERY one of them, never only a first that a second gets past. The player is given no way to stray at all: a sin the game makes playable is one the person at the keyboard performs, so obedience here is not made refusable the way it would be for a character. Full-screen glowing 🕊️ + GOLD message (God's leading = His word) + a ROTATING Scripture about the Spirit's leading (gold, since it's God's word; reference white). auto-dismisses after dismiss_ms — the real flow passes ~5000ms; the #dove dev route passes null so it stays for inspection";
  let color = app_shared_color_gold_text();
  let message =
    "The Holy Spirit is leading you to follow the discernment God gave you";
  let emoji_text = emoji_dove();
  let card = app_g_message_overlay(
    emoji_text,
    message,
    color,
    dismiss_ms,
    noop,
  );
  let drawn = g_verse_hs_warning_next();
  app_g_overlay_verse_add(card, drawn);
  return card;
}
