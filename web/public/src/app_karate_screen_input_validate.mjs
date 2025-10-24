import { list_first } from "../../../love/public/src/list_first.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { app_karate_validate_style_assign } from "../../../karate_code/public/src/app_karate_validate_style_assign.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { string_trim } from "../../../love/public/src/string_trim.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_on_input } from "../../../love/public/src/html_on_input.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { app_karate_style_control_border } from "../../../love/public/src/app_karate_style_control_border.mjs";
import { app_karate_green_dark } from "../../../karate_code/public/src/app_karate_green_dark.mjs";
import { app_karate_style_control } from "../../../karate_code/public/src/app_karate_style_control.mjs";
export function app_karate_screen_input_validate(
  div,
  div_checks,
  inputs,
  button_below,
  checks,
) {
  function lambda2(input) {
    app_karate_style_control(input);
    const border_color = app_karate_green_dark();
    app_karate_style_control_border(input, border_color);
    let ul = html_element(div_checks, "ul");
    html_style_assign(ul, {
      color: "#872121ff",
    });
    html_style_set(ul, "margin", "0");
    function validate_all() {}
    html_on_input(input, validate_all);
    function validate_input() {
      let value = html_value_get(input);
      let trimmed = string_trim(value);
      html_value_set(input, trimmed);
      html_clear(ul);
      let valid = true;
      function lambda(c) {
        let text2 = object_property_get(c, "text");
        let check2 = object_property_get(c, "check");
        let a = check2(trimmed);
        if (not(a)) {
          let li = html_element(ul, "li");
          html_text_set(li, text2);
          valid = false;
        }
      }
      each(checks, lambda);
      app_karate_validate_style_assign(valid, [div], input, button_below);
    }
    validate_input();
  }
  each(inputs, lambda2);
  let first = list_first(inputs);
  html_focus(first);
}
