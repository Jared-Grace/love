import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_overflow_wrap } from "./html_style_overflow_wrap.mjs";
import { app_shared_color_green_deep } from "./app_shared_color_green_deep.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { text_take } from "./text_take.mjs";
import { html_pre_text } from "./html_pre_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { list_map } from "./list_map.mjs";
export function app_reply_rules_diff_show(root, diff) {
  arguments_assert(arguments, 2);
  ("The lines a written-down change would alter, drawn the way a difference is read: what would go, what would come, and enough of what stays either side to see where it lands.");
  ("★ THE SIGN IS THE FIRST CHARACTER AND THE REST OF THE LINE IS THE CODE UNTOUCHED, so what is on the screen lines up character for character with what is in the file. Any drawing that took the sign off and put the colour on instead would be easier to write and would lose the one thing that makes a difference checkable by eye - that the unsigned lines can be found in the file exactly as they are written here.");
  ("Each line is drawn as preformatted text so its indentation survives. Indentation is how a reader sees which call an argument belongs to, and a browser throws it away by default.");
  ("The colours say the same thing as the signs rather than instead of them. Somebody who cannot tell the two colours apart, or who is reading this printed, still has the signs; somebody scanning quickly has the colour. Neither is asked to carry it alone.");
  let block = html_div(root);
  html_style_font_size(block, "0.75em");
  html_style_overflow_wrap(block, "anywhere");
  let green = app_shared_color_green_deep();
  let red = app_shared_color_red();
  let gray = app_shared_color_gray_dark();
  function color_of(sign) {
    let added = equal(sign, "+");
    if (added) {
      return green;
    }
    let removed = equal(sign, "-");
    if (removed) {
      return red;
    }
    return gray;
  }
  function each_line(line) {
    let sign = text_take(line, 1);
    let color = color_of(sign);
    let one = html_pre_text(block, line);
    html_font_color_set(one, color);
    html_style_margin(one, "0");
    return one;
  }
  let drawn = list_map(diff, each_line);
  return drawn;
}
