import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_g_emoji_glow_keyframe } from "./app_g_emoji_glow_keyframe.mjs";
export function app_g_message_overlay(emoji_text, message, color, dismiss_ms) {
  "a full-screen prayer moment: dims the world, floats a glowing emoji above a message on a dark CARD, fades in, then auto-dismisses after dismiss_ms. `color` sets the message color — GOLD when the words are God's leading (His word), white when they are the player's own prayer. RETURNS the card (a flex column) so a caller can add more onto the same black surface — e.g. the dove appends a verse + reference. dismiss_ms null = stays until removed (used by the #dove dev route to inspect it). shared by the discernment-prevented dove and the thanksgiving prayer";
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
  let emoji = html_p_text(div, emoji_text);
  html_style_assign(emoji, {
    "font-size": "9rem",
    margin: "0",
    animation: "emojiGlow 1.6s ease-in-out infinite alternate",
  });
  let card = html_div(div);
  html_style_assign(card, {
    background: "rgba(0, 0, 0, 0.55)",
    padding: "1.5rem 2rem",
    "border-radius": "3rem",
    "box-shadow": "0 0 2.5rem 1.75rem rgba(0, 0, 0, 0.55)",
    "max-width": "88vw",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    gap: "0.85rem",
  });
  let message_p = html_p_text(card, message);
  html_style_assign(message_p, {
    color,
    "font-size": "1.75rem",
    margin: "0",
    "max-width": "85vw",
    "text-align": "center",
    "text-shadow": "0 0 0.2em rgba(255, 255, 255, 0.7)",
  });
  html_reflow_force(div);
  html_style_set(div, "opacity", "1");
  function dismiss() {
    html_remove(div);
  }
  let auto = null_not_is(dismiss_ms);
  if (auto) {
    setTimeout(dismiss, dismiss_ms);
  }
  return card;
}
