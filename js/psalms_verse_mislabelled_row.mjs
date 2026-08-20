import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { app_shared_color_gray } from "./app_shared_color_gray.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { html_bold_semi } from "./html_bold_semi.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { psalms_second_take_link } from "./psalms_second_take_link.mjs";
export function psalms_verse_mislabelled_row(root, entry) {
  "One song whose title names the wrong verse, written out as the title it wears, the verse it really sings, the words that settle it, and a link to hear them.";
  "The heard words are shown rather than kept out of sight, because a claim that a title is wrong is only worth as much as what it rests on, and the person who has to decide whether to change a title is the one who sang it - a line of it is enough for them to know at once.";
  arguments_assert(arguments, 2);
  let row = html_div(root);
  html_style_padding(row, "12px 0");
  html_style_set(
    row,
    "border-bottom",
    "1px solid " + app_shared_color_gray_dark(),
  );
  let said = html_p_text(row, entry.titled + " is really " + entry.sung);
  html_style_margin(said, "0 0 4px 0");
  html_bold_semi(said);
  let heard = html_p_text(row, entry.heard);
  html_style_margin(heard, "0 0 4px 0");
  html_style_set(heard, "color", app_shared_color_gray());
  psalms_second_take_link(row, entry.video_id, "hear it");
}
