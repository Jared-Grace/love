import { app_g_emoji_glow_apply } from "./app_g_emoji_glow_apply.mjs";
import { app_g_overlay_card_style } from "./app_g_overlay_card_style.mjs";
import { app_g_overlay_fonts } from "./app_g_overlay_fonts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_viewport_height_full } from "./html_viewport_height_full.mjs";
import { html_viewport_width_full } from "./html_viewport_width_full.mjs";
export function app_g_overlay_cover_emoji_card(background, emoji_text) {
  "$plain background";
  "$plain emoji_text";
  "A cover over the whole world, holding a glowing emoji above a dark card the caller fills - handed back still see-through, so the caller writes into the card and then fades the cover in.";
  "Centring is asked for SAFELY and the cover may be scrolled, which together are the floor under the sizes: plain centring puts half of anything too tall ABOVE the top of the screen, where no scrolling can ever reach it, so a long verse would lose its opening words with nothing to show anything was missing. Safe centring gives that up and packs from the top the moment the content stops fitting, and the scrolling then makes the rest reachable.";
  "How dark the cover is is the caller's, because it says how much of the world is meant to be still there behind it - a moment the player is being spoken to leaves the street faintly visible, and a moment they are waiting on the Lord takes it almost away.";
  "The cover comes back see-through and is not faded in here. The fade has to run after the card is filled, or the reader watches the words arrive one at a time onto a surface already fully lit.";
  arguments_assert(arguments, 2);
  let fonts = app_g_overlay_fonts();
  let div = html_body_div();
  html_style_assign(div, {
    position: "fixed",
    top: "0",
    left: "0",
    width: html_viewport_width_full(),
    height: html_viewport_height_full(),
    background,
    display: "flex",
    "flex-direction": "column",
    "justify-content": "safe center",
    "align-items": "center",
    "overflow-y": "auto",
    gap: "1.5rem",
    "z-index": "1000",
    opacity: "0",
    transition: "opacity 0.3s ease",
  });
  let emoji = html_p_text(div, emoji_text);
  html_style_assign(emoji, {
    "font-size": fonts.emoji,
    margin: "0",
  });
  app_g_emoji_glow_apply(emoji);
  let card = html_div(div);
  app_g_overlay_card_style(card);
  let r = {
    div,
    card,
  };
  return r;
}
