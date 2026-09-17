import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { app_reply_rules_font_size_small } from "./app_reply_rules_font_size_small.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_reply_rules_file_card(root, kind, name) {
  arguments_assert(arguments, 3);
  ("A box one file of a change is drawn inside, with the file's name across its top, returned so that the file's lines and its verdict can be put in it.");
  ("★ A FILE IS A CARD SO THAT WHERE IT ENDS CAN BE SEEN. A change is drawn as a title, then several files one after another, then the exchanges it produces; laid straight onto the page, the last line of one file runs into the name of the next and into the heading after it, and a reader cannot tell which lines a button underneath is about. An edge around each file answers that without reading anything.");
  ("The name is said across the top of the card rather than only on the button, because the top is what is on the screen when the reading starts. The button says it again at the bottom, because that is what is on the screen when the verdict is given.");
  ("The card is the shared blue one rather than a box of its own, so a file here looks like a card anywhere else in the apps and nothing about it has to be learned.");
  let card = app_shared_container_blue(root);
  let said = text_combine_multiple([kind, " ", name]);
  let head = html_p_text(card, said);
  html_style_margin(head, "0 0 0.4em 0");
  let value = app_reply_rules_font_size_small();
  html_style_font_size(head, value);
  let gray = app_shared_color_gray_dark();
  html_font_color_set(head, gray);
  return card;
}
