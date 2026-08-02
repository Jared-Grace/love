import { app_shared_viewport_width_full } from "./app_shared_viewport_width_full.mjs";
import { app_shared_viewport_height_full } from "./app_shared_viewport_height_full.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_on } from "./html_on.mjs";
export function app_shared_message_overlay(emoji_text, message) {
  "a gentle full-screen overlay: dims the page, floats an emoji above a message on a dark rounded card, fades in, and dismisses when tapped anywhere. a kind way to tell the reader something (e.g. that they are offline) instead of failing silently. returns the overlay element.";
  let div = html_body_div();
  html_style_assign(div, {
    position: "fixed",
    top: "0",
    left: "0",
    width: app_shared_viewport_width_full(),
    height: app_shared_viewport_height_full(),
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    gap: "1.5rem",
    "z-index": "1000",
    opacity: "0",
    transition: "opacity 0.3s ease",
    cursor: "pointer",
  });
  let emoji = html_p_text(div, emoji_text);
  html_style_assign(emoji, {
    "font-size": "3.5rem",
    margin: "0",
  });
  let card = html_div(div);
  html_style_assign(card, {
    background: "rgba(0, 0, 0, 0.55)",
    "border-radius": "1.5rem",
    padding: "1.75rem 2.25rem",
    "max-width": "88vw",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
  });
  let message_p = html_p_text(card, message);
  html_style_assign(message_p, {
    color: "white",
    "font-size": "1.25rem",
    margin: "0",
    "max-width": "85vw",
    "text-align": "center",
    "line-height": "1.5",
  });
  html_reflow_force(div);
  html_style_opacity(div, "1");
  function dismiss() {
    html_remove(div);
  }
  html_on(div, "click", dismiss);
  return div;
}
