import { html_progress_caption } from "./html_progress_caption.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_progress_bar(root, count, total, name) {
  ("a progress bar styled for g — dark-green fill (",
    fn_name("app_shared_button_background"),
    ") on a pale-green track (",
    fn_name("app_shared_color_green_light"),
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
  let left = multiply_divide(100, count, total);
  let width = text_combine(left, "%");
  html_style_assign(fill, {
    "border-radius": "9999px",
    "background-color": app_shared_button_background(),
    height: "0.55em",
    width,
  });
  html_progress_caption(container, count, total, name);
  return container;
}
