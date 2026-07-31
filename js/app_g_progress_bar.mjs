import { fn_name } from "./fn_name.mjs";
import { html_progress_caption_font_size } from "./html_progress_caption_font_size.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { add_1 } from "./add_1.mjs";
export function app_g_progress_bar(root, count, total, name) {
  ("a progress bar styled for g — dark-green fill (",
    app_shared_button_background.name,
    ") on a pale-green track (",
    app_shared_color_green_light.name,
    "), rounded, with a small '<Name> N out of M' caption — shown above study / sermon. mirrors ",
    fn_name("html_progress_bar"),
    "'s structure but with g's greens (that shared bar is used by 3 other apps with their own colors, so this is kept g-local rather than reworking the shared signature)");
  let container = html_div(root);
  let track = html_div(container);
  html_style_assign(track, {
    "border-radius": "9999px",
    "background-color": app_shared_color_green_light(),
    overflow: "hidden",
  });
  let fill = html_div(track);
  let top = multiply(100, count);
  let left = divide(top, total);
  let width = text_combine(left, "%");
  html_style_assign(fill, {
    "border-radius": "9999px",
    "background-color": app_shared_button_background(),
    height: "0.55em",
    width,
  });
  let a = add_1(count);
  let s = text_combine_multiple([name, " ", a, " out of ", total]);
  let caption = text_first_upper_to(s);
  let text_div = html_div_text_centered(container, caption);
  let value = html_progress_caption_font_size();
  html_style_font_size(text_div, value);
  return container;
}
