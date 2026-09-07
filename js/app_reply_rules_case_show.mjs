import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_contact_message_display } from "./app_shared_contact_message_display.mjs";
import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_div_text_multiple } from "./html_div_text_multiple.mjs";
import { app_reply_rules_real_show } from "./app_reply_rules_real_show.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_reply_rules_case_show(root, one) {
  arguments_assert(arguments, 2);
  ("One worked case drawn as the exchange it stands for: the message going in on the side a received message hangs from, and what the rules say back on the side a reply hangs from, with the real message it was drawn from underneath.");
  ("★ A TEST OF A REPLY RULE IS AN EXCHANGE, SO IT IS DRAWN AS ONE. Written out as an input and an expected output it reads as a record, and what a record cannot show is the thing actually being judged - whether these words are a fitting answer to those words. Side by side in the shapes the message app itself uses, the question answers itself on sight.");
  ("It is drawn by the same unit the message app draws its own messages with, so the two sides sit where the person receiving the reply will see them. A page that decided its own bubble shapes would be a second opinion about all of it and would drift the first time the real one was improved.");
  ("A case expecting nothing back is drawn with the emptiness said out loud on the reply side. Left as an absent bubble it would look like a case that had not finished drawing, and a case that deliberately expects silence is one of the more important things on this screen.");
  let message = property_get(one, "message");
  let answered = property_get(one, "answered");
  let bubble = app_shared_contact_message_display("right", message, root);
  let background = app_shared_button_uncolored_background_color();
  html_style_background_color_set(bubble, background);
  let mine = app_shared_contact_message_display("left", "", root);
  if (answered) {
    let outputs = property_get(one, "outputs");
    html_div_text_multiple(mine, outputs);
    app_reply_rules_real_show(root, one);
    return mine;
  }
  let said = html_div_text(mine, "nothing - no rule reaches the end of this");
  html_style_font_size(said, "0.8em");
  let gray = app_shared_color_gray_dark();
  html_font_color_set(said, gray);
  app_reply_rules_real_show(root, one);
  return mine;
}
