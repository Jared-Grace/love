import { property_set } from "./property_set.mjs";
import { list_is_assert_json } from "./list_is_assert_json.mjs";
import { list_all } from "./list_all.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { html_focus } from "./html_focus.mjs";
import { app_shared_validate_style_assign } from "./app_shared_validate_style_assign.mjs";
import { each } from "./each.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { text_trim } from "./text_trim.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_element } from "./html_element.mjs";
import { app_karate_style_control_border } from "./app_karate_style_control_border.mjs";
import { app_shared_validate_border_color } from "./app_shared_validate_border_color.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { true_is } from "./true_is.mjs";
export function app_karate_screen_input_validate(
  div,
  div_checks,
  inputs,
  button_below,
  checks,
) {
  "Puts live checking on the boxes of one screen: as a person types, every box is measured against the screen's checks and told underneath it what is still wrong, and the button below only comes alive once all of them pass.";
  "The complaints stand in a list under the box they belong to rather than gathered into one message elsewhere, so a person with three things wrong can see all three and which box each of them is about.";
  "Any keystroke in any box checks every box over again. What the button below waits on is all of them being right at the same moment, so the keystroke that puts the last one right has to be able to reach that decision.";
  "WHAT IS TYPED IS TRIMMED AND PUT BACK IN THE BOX ON EVERY KEYSTROKE, WHICH MAKES A TRAILING SPACE UNTYPEABLE. The message screen hands its message box to this: somebody writing a sentence there presses space, the space is taken off before the next letter arrives, and the words run into each other. Checking the trimmed value is right - writing the trimmed value back into a box somebody is still typing in is the part that does the harm.";
  list_is_assert_json(inputs, {
    hint: "the screen inputs should be a list to validate",
  });
  function lambda2(input) {
    app_shared_style_control(input);
    let border_color = app_shared_validate_border_color();
    app_karate_style_control_border(input, border_color);
    let ul = html_element(div_checks, "ul");
    property_set(input, "ul", ul);
    html_font_color_set(ul, "#872121ff");
    html_margin_0(ul);
    html_on_input(input, validate_all);
    validate_input(input);
  }
  function validate_all() {
    each(inputs, validate_input);
    let mapped = list_map(inputs, validate_input);
    let valid_all = list_all(mapped, true_is);
    app_shared_validate_style_assign(valid_all, [div], null, button_below);
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
    app_shared_validate_style_assign(valid, [div], input, null);
    return valid;
  }
  let first = list_first(inputs);
  html_focus(first);
  return validate_all;
}
