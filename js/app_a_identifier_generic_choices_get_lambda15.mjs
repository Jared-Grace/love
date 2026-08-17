import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_overlay_on_enter } from "./app_a_overlay_on_enter.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { ternary } from "./ternary.mjs";
import { app_a_textarea } from "./app_a_textarea.mjs";
import { app_a_input } from "./app_a_input.mjs";
import { html_rows_set } from "./html_rows_set.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_select } from "./html_select.mjs";
import { app_a_identifier_generic_choices_get_on_enter } from "./app_a_identifier_generic_choices_get_on_enter.mjs";
import { app_a_button_wide } from "./app_a_button_wide.mjs";
export async function app_a_identifier_generic_choices_get_lambda15(
  o3,
  a,
  change,
  name,
  lines_multiple,
) {
  arguments_assert(arguments, 5);
  let r = app_a_overlay_on_enter(on_enter, o3, a);
  let o = property_get(r, "overlay_result");
  let overlay_change = property_get(o, "overlay");
  let oc_change = property_get(r, "container");
  let text = property_get(change, "text");
  let text2 = text_combine(text, " from:");
  html_div_text(oc_change, text2);
  html_div_text(oc_change, name);
  let text3 = text_combine(text, " to:");
  html_div_text(oc_change, text3);
  let fn = null;
  fn = ternary(lines_multiple, app_a_textarea, app_a_input);
  let input = fn(overlay_change);
  if (lines_multiple) {
    let row_count = 20;
    html_rows_set(input, row_count);
  } else {
    html_centered(input);
  }
  html_value_set(input, name);
  await html_select(input);
  async function on_enter() {
    let r2 = await app_a_identifier_generic_choices_get_on_enter(
      input,
      change,
      a,
      o,
    );
    return r2;
  }
  let component = app_a_button_wide(overlay_change, text, on_enter);
}
