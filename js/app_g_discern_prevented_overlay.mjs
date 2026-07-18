import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_remove } from "./html_remove.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { app_shared_color_gold_text } from "./app_shared_color_gold_text.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { app_g_emoji_glow_keyframe } from "./app_g_emoji_glow_keyframe.mjs";
export function app_g_discern_prevented_overlay() {
  "the Holy Spirit gently preventing the FIRST disregard of discernment: full-screen 🕊️ + gold message (God's leading = His word); fades in, then auto-dismisses after a fixed time (enough to read)";
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
  let emoji = html_p_text(div, emoji_dove());
  html_style_assign(emoji, {
    "font-size": "9rem",
    margin: "0",
    animation: "emojiGlow 1.6s ease-in-out infinite alternate",
  });
  let message = html_p_text(
    div,
    "The Holy Spirit is leading you to follow the discernment God gave you",
  );
  html_style_assign(message, {
    color: app_shared_color_gold_text(),
    "font-size": "1.75rem",
    margin: "0",
    "max-width": "85vw",
    "text-align": "center",
    "text-shadow": "0 0 0.2em rgba(255, 255, 255, 0.7)",
    background: "rgba(0, 0, 0, 0.55)",
    padding: "1.5rem 2rem",
    "border-radius": "3rem",
    "box-shadow": "0 0 2.5rem 1.75rem rgba(0, 0, 0, 0.55)",
  });
  html_reflow_force(div);
  html_style_set(div, "opacity", "1");
  function dismiss() {
    html_remove(div);
  }
  setTimeout(dismiss, 5000);
  return div;
}
