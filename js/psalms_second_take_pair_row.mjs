import { html_style_margin } from "./html_style_margin.mjs";
import { html_bold_semi } from "./html_bold_semi.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { psalms_second_take_link } from "./psalms_second_take_link.mjs";
export function psalms_second_take_pair_row(root, pair) {
  "One passage that was sung twice, written out as its name and a link to each of the two singings, so both can be opened and heard one after the other.";
  "The two are called first and second by when they were uploaded and by nothing else. Naming them that way rather than better or worse is the whole point: the listening is what decides, and a label written here would decide it in advance.";
  arguments_assert(arguments, 2);
  let row = html_div(root);
  html_style_padding(row, "12px 0");
  html_style_set(
    row,
    "border-bottom",
    "1px solid " + app_shared_color_gray_dark(),
  );
  let name = html_p_text(row, pair.passage);
  html_style_margin(name, "0 0 8px 0");
  html_bold_semi(name);
  psalms_second_take_link(row, pair.first, "first singing");
  psalms_second_take_link(row, pair.second, "second singing");
}
