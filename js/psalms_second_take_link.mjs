import { html_color_blue_on_dark } from "./html_color_blue_on_dark.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
export function psalms_second_take_link(root, video_id, label) {
  "A link to one singing on the channel, written from its watch code, and given room to be tapped with a thumb rather than aimed at with a mouse.";
  arguments_assert(arguments, 3);
  let a = html_a_href_text(
    root,
    "https://www.youtube.com/watch?v=" + video_id,
    label,
  );
  html_display_inline_block(a);
  html_style_set(a, "color", html_color_blue_on_dark());
  html_style_set(a, "margin-right", "16px");
  html_style_padding(a, "10px 0");
  return a;
}
