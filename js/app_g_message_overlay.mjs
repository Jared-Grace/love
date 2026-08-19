import { app_g_overlay_cover_emoji_card } from "./app_g_overlay_cover_emoji_card.mjs";
import { property_get } from "./property_get.mjs";
import { html_reflow_opacity_full } from "./html_reflow_opacity_full.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_remove } from "./html_remove.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_g_overlay_fonts } from "./app_g_overlay_fonts.mjs";
export function app_g_message_overlay(
  emoji_text,
  message,
  color,
  dismiss_ms,
  on_dismiss,
) {
  "a full-screen prayer moment: dims the world, floats a glowing emoji above a message on a dark CARD, fades in, then auto-dismisses after dismiss_ms. `color` sets the message color — GOLD when the words are God's leading (His word), white when they are the player's own prayer. RETURNS the card (a flex column) so a caller can add more onto the same black surface — e.g. the dove appends a verse + reference. dismiss_ms null = stays until removed (used by the #dove dev route to inspect it). shared by the discernment-prevented dove and the thanksgiving prayer";
  let fonts = app_g_overlay_fonts();
  let cover = app_g_overlay_cover_emoji_card("rgba(0, 0, 0, 0.6)", emoji_text);
  let div = property_get(cover, "div");
  let card = property_get(cover, "card");
  let message_p = html_p_text(card, message);
  html_style_assign(message_p, {
    color,
    "font-size": fonts.statement,
    margin: "0",
    "max-width": "85vw",
    "text-align": "center",
    "text-shadow": "0 0 0.2em rgba(255, 255, 255, 0.7)",
  });
  html_reflow_opacity_full(div);
  function dismiss() {
    html_remove(div);
    on_dismiss();
  }
  let auto = null_not_is(dismiss_ms);
  if (auto) {
    setTimeout(dismiss, dismiss_ms);
  }
  return card;
}
