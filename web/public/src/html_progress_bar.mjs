import { html_div_text_centered } from "../../../love/public/src/html_div_text_centered.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { html_style_padding_y } from "../../../love/public/src/html_style_padding_y.mjs";
import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_replace_button_symbol_style_background_color_valid } from "../../../love/public/src/app_replace_button_symbol_style_background_color_valid.mjs";
import { app_replace_button_rule_background_color } from "../../../love/public/src/app_replace_button_rule_background_color.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
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
    width: (100 * count_progress) / count_total + "%",
  });
  html_centered(div);
  html_style_padding_y(div, "0.3em");
  let combined = text_combine_multiple([
    progress_bar_name,
    " ",
    count_progress + 1,
    " out of ",
    count_total,
  ]);
  let text = text_first_upper_to(combined);
  let div2 = html_div_text_centered(progress_container_text, text);
  html_style_assign(div2, {
    "font-size": "0.8em",
  });
  return progress_container;
}
