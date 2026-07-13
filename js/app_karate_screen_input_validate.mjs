import { property_set } from "./property_set.mjs";
import { list_is_assert } from "./list_is_assert.mjs";
import { list_all } from "./list_all.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { html_focus } from "./html_focus.mjs";
import { app_karate_validate_style_assign } from "../../karate_code/js/app_karate_validate_style_assign.mjs";
import { each } from "./each.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { text_trim } from "./text_trim.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_element } from "./html_element.mjs";
import { app_karate_style_control_border } from "./app_karate_style_control_border.mjs";
import { app_karate_green_dark } from "../../karate_code/js/app_karate_green_dark.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { true_is } from "./true_is.mjs";
export function app_karate_screen_input_validate(
  div,
  div_checks,
  inputs,
  button_below,
  checks,
) {
  list_is_assert(inputs);
  function lambda2(input) {
    app_shared_style_control(input);
    let border_color = app_karate_green_dark();
    app_karate_style_control_border(input, border_color);
    let ul = html_element(div_checks, "ul");
    property_set(input, "ul", ul);
    html_style_set(ul, "color", "#872121ff");
    html_style_set(ul, "margin", "0");
    html_on_input(input, validate_all);
    validate_input(input);
  }
  function validate_all() {
    each(inputs, validate_input);
    let mapped = list_map(inputs, validate_input);
    let valid_all = list_all(mapped, true_is);
    app_karate_validate_style_assign(valid_all, [div], null, button_below);
  }
  each(inputs, lambda2);
  function validate_input(input) {
    let value = html_value_get(input);
    let trimmed = text_trim(value);
    html_value_set(input, trimmed);
    let ul = property_get(input, "ul");
    html_clear(ul);
    let valid = true;
    function lambda(c) {
      let text = property_get(c, "text");
      let check = property_get(c, "check");
      let a = check(trimmed);
      if (not(a)) {
        let li = html_element(ul, "li");
        html_text_set(li, text);
        valid = false;
      }
    }
    each(checks, lambda);
    app_karate_validate_style_assign(valid, [div], input, null);
    return valid;
  }
  let first = list_first(inputs);
  html_focus(first);
  return validate_all;
}
