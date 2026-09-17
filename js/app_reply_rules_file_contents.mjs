import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_style_padding_em } from "./html_style_padding_em.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
export function app_reply_rules_file_contents(card) {
  arguments_assert(arguments, 1);
  ("A white panel inside a file's card that the file's lines are drawn on, returned so they can be put in it and so it can be put away once the file is approved.");
  ("★ THE LINES ARE ON WHITE AND THE CARD AROUND THEM IS BLUE, so the code reads as a page laid on the card rather than as more of the card. The name above and the verdict below are about the file; the white is the file. The added and removed lines keep their faint green and red, which were chosen to be seen against white.");
  let contents = html_div(card);
  let white = app_shared_color_white();
  html_style_background_color_set(contents, white);
  html_style_padding_em(contents, "0.4");
  let radius = app_shared_border_radius();
  html_border_radius(contents, radius);
  return contents;
}
