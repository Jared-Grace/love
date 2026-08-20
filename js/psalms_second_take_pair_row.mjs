import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
export function psalms_second_take_pair_row(root, pair) {
  "One passage that was sung twice, written out as its name and a link to each of the two singings, so both can be opened and heard one after the other.";
  "The two are called first and second by when they were uploaded and by nothing else. Naming them that way rather than better or worse is the whole point: the listening is what decides, and a label written here would decide it in advance.";
  "The links are given room to be tapped rather than being a line of small words, because the reason to open this page at all is to hear the two on a phone.";
  arguments_assert(arguments, 2);
  let row = html_div(root);
  html_style_padding(row, "12px 0");
  html_style_set(row, "border-bottom", "1px solid #333333");
  let name = html_p_text(row, pair.passage);
  html_style_set(name, "margin", "0 0 8px 0");
  html_style_set(name, "font-weight", "600");
  psalms_second_take_link(row, pair.first, "first singing");
  psalms_second_take_link(row, pair.second, "second singing");
}
export function psalms_second_take_link(root, video_id, label) {
  "A link to one singing, sized to be tapped with a thumb.";
  arguments_assert(arguments, 3);
  let a = html_a_href_text(
    root,
    "https://www.youtube.com/watch?v=" + video_id,
    label,
  );
  html_style_set(a, "display", "inline-block");
  html_style_set(a, "color", "#8ab4f8");
  html_style_set(a, "margin-right", "16px");
  html_style_padding(a, "10px 0");
  return a;
}
