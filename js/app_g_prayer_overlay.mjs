import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_g_scripture_verse } from "./app_g_scripture_verse.mjs";
import { app_g_emoji_glow_keyframe } from "./app_g_emoji_glow_keyframe.mjs";
import { g_verse_waiting_next } from "./g_verse_waiting_next.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_prayer_overlay() {
  "full-screen prayer-wait overlay: dims the world, floats a glowing praying emoji above a dark card holding 'Waiting on the Lord...' and a verse; fades in; caller removes it when the prayer is answered";
  let body = html_document_body();
  let div = html_div(body);
  html_style_assign(div, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    gap: "1.5rem",
    "z-index": "1000",
    opacity: "0",
    transition: "opacity 0.3s ease",
  });
  html_style_head(app_g_emoji_glow_keyframe());
  let emoji = html_p_text(div, emoji_pray());
  html_style_assign(emoji, {
    "font-size": "12rem",
    margin: "0",
    animation: "emojiGlow 1.6s ease-in-out infinite alternate",
  });
  let card = html_div(div);
  html_style_assign(card, {
    background: "rgba(0, 0, 0, 0.55)",
    "border-radius": "5rem",
    padding: "1.75rem 2.25rem",
    "max-width": "88vw",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    gap: "0.85rem",
    "box-shadow": "0 0 2.5rem 1.75rem rgba(0, 0, 0, 0.55)",
  });
  let waiting_text = html_p_text(card, "Waiting on the Lord...");
  html_style_assign(waiting_text, {
    color: "white",
    "font-size": "2.25rem",
    margin: "0",
    "text-align": "center",
  });
  let drawn = g_verse_waiting_next();
  let verse = html_p_text(card, property_get(drawn, "text"));
  html_style_assign(verse, {
    "font-size": "1.75rem",
    margin: "0",
    "max-width": "80vw",
    "text-align": "center",
  });
  app_g_scripture_verse(verse);
  let reference = html_p_text(card, property_get(drawn, "reference"));
  html_style_assign(reference, {
    color: "white",
    "font-size": "1.25rem",
    margin: "0",
    "text-align": "center",
  });
  html_reflow_force(div);
  html_style_set(div, "opacity", "1");
  return div;
}
