import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { g_thanks_gratitude } from "./g_thanks_gratitude.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_take } from "./list_take.mjs";
import { each } from "./each.mjs";
import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_gratitude_overlay() {
  "the spontaneous gratitude prayer menu, laid out like a player TURN in a conversation (DRY): a player container (`app_g_container_player`) with the prompt 'What would you like to pray to God?' + a green button (topical emoji + text) per shuffled thanksgiving; the 'Amen' button sits OUTSIDE the container (like the End-conversation button) and closes. tapping a thanks prays it (a brief thanks overlay) and RE-ROLLS the set so you can keep thanking — openable anytime, no meter (gratitude is spontaneous, 1 Thess 5:18)";
  let body = html_document_body();
  let overlay = html_div(body);
  html_style_assign(overlay, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "stretch",
    gap: "1rem",
    padding: "1vw",
    "box-sizing": "border-box",
    "z-index": "1000",
  });
  function render() {
    html_clear(overlay);
    let container = app_g_container_player(overlay);
    app_g_p_text(container, "What would you like to pray to God?");
    let all = g_thanks_gratitude();
    list_shuffle(all);
    let some = list_take(all, 4);
    function add(thanks) {
      let emoji = property_get(thanks, "emoji");
      let text = property_get(thanks, "text");
      let label = text_combine_multiple([emoji, " ", text]);
      function on_pick() {
        let color = app_shared_color_green_light();
        app_g_message_overlay(emoji_pray(), text, color, 3500);
        render();
      }
      app_g_button_green(container, label, on_pick);
    }
    each(some, add);
    function done() {
      html_remove(overlay);
    }
    let amen = text_combine_multiple([emoji_pray(), " Amen"]);
    app_g_button_green(overlay, amen, done);
  }
  render();
  return overlay;
}
