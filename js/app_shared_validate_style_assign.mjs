import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { html_border_invalid_color } from "../../love/js/html_border_invalid_color.mjs";
import { app_shared_button_font_color } from "../../love/js/app_shared_button_font_color.mjs";
import { each } from "../../love/js/each.mjs";
import { null_not_is } from "../../love/js/null_not_is.mjs";
import { html_enable_if } from "../../love/js/html_enable_if.mjs";
import { html_style_assign } from "../../love/js/html_style_assign.mjs";
import { app_shared_button_background_invalid } from "../../love/js/app_shared_button_background_invalid.mjs";
import { not } from "../../love/js/not.mjs";
import { app_shared_button_background } from "../../love/js/app_shared_button_background.mjs";
import { app_shared_validate_background } from "../../love/js/app_shared_validate_background.mjs";
import { app_shared_validate_border_color } from "../../love/js/app_shared_validate_border_color.mjs";
export function app_shared_validate_style_assign(
  valid,
  divs,
  input,
  button_next,
) {
  let border_color = app_shared_validate_border_color();
  let background = app_shared_validate_background();
  let button_background = app_shared_button_background();
  let font_color = app_shared_button_font_color();
  if (not(valid)) {
    font_color = "#d0d0d0ff";
    border_color = html_border_invalid_color();
    background = "#ffb0b0ff";
    button_background = app_shared_button_background_invalid();
  }
  if (null_not_is(divs)) {
    function lambda(div) {
      html_style_background_color_set(div, background);
    }
    each(divs, lambda);
  }
  if (null_not_is(input)) {
    html_style_assign(input, {
      "border-color": border_color,
      color: border_color,
    });
  }
  if (null_not_is(button_next)) {
    html_style_assign(button_next, {
      "background-color": button_background,
      color: font_color,
    });
    html_enable_if(button_next, valid);
  }
}
