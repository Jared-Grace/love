import { html_style_set } from "./html_style_set.mjs";
import { add_1 } from "./add_1.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_replace_button_symbol_style_background_color_valid } from "./app_replace_button_symbol_style_background_color_valid.mjs";
import { app_replace_button_rule_background_color } from "./app_replace_button_rule_background_color.mjs";
import { html_div } from "./html_div.mjs";
import { html_p } from "./html_p.mjs";
import { text_combine } from "./text_combine.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function html_progress_bar(
  root,
  count_progress,
  count_total,
  progress_bar_name,
) {
  let progress_container_text = html_p(root);
  let progress_container = html_div(progress_container_text);
  let button_background_color = app_replace_button_rule_background_color();
  let color_valid = app_replace_button_symbol_style_background_color_valid();
  html_style_assign(progress_container, {
    "border-radius": "9999px",
    "background-color": button_background_color,
    padding: "0",
  });
  let div = html_div(progress_container);
  html_style_assign(div, {
    "border-radius": "9999px",
    "background-color": color_valid,
    "padding-left": "0.6em",
    height: "100%",
    width: text_combine(
      divide(multiply(100, count_progress), count_total),
      "%",
    ),
  });
  html_centered(div);
  html_style_padding_y(div, "0.3em");
  let a = add_1(count_progress, 1);
  let combined = text_combine_multiple([
    progress_bar_name,
    " ",
    a,
    " out of ",
    count_total,
  ]);
  let text = text_first_upper_to(combined);
  let div2 = html_div_text_centered(progress_container_text, text);
  html_style_set(div2, "font-size", "0.8em");
  let r = {
    container: progress_container_text,
  };
  return r;
}
