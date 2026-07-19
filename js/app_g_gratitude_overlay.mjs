import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_overlay_card_style } from "./app_g_overlay_card_style.mjs";
import { app_g_overlay_fonts } from "./app_g_overlay_fonts.mjs";
import { g_thanks_gratitude } from "./g_thanks_gratitude.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_take } from "./list_take.mjs";
import { each } from "./each.mjs";
import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
export function app_g_gratitude_overlay() {
  "the spontaneous gratitude prayer menu (openable anytime): dims the world, shows a card titled 'Give thanks to God' with a few shuffled thanksgivings as green (player-voice) buttons; tapping one prays it (a brief thanks overlay) and RE-ROLLS the set so you can keep thanking; 'Amen' closes. no meter, no reward — gratitude is spontaneous (1 Thess 5:18)";
  let fonts = app_g_overlay_fonts();
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
  });
  let card = html_div(div);
  app_g_overlay_card_style(card);
  let title = html_p_text(card, "Give thanks to God");
  html_style_assign(title, {
    color: "white",
    "font-size": fonts.statement,
    margin: "0",
    "text-align": "center",
  });
  let options = html_div(card);
  html_style_assign(options, {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    gap: "0.85rem",
  });
  function render() {
    html_clear(options);
    let all = g_thanks_gratitude();
    list_shuffle(all);
    let some = list_take(all, 4);
    function add(thanks) {
      function on_pick() {
        let color = app_shared_color_green_light();
        app_g_message_overlay(emoji_pray(), thanks, color, 3500);
        render();
      }
      app_g_button_green(options, thanks, on_pick);
    }
    each(some, add);
  }
  render();
  function done() {
    html_remove(div);
  }
  app_g_button_green(card, "Amen", done);
  return div;
}
