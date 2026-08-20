import { html_checkboxes_lambda6 } from "./html_checkboxes_lambda6.mjs";
import { html_checkboxes_on_click } from "./html_checkboxes_on_click.mjs";
import { html_checkboxes_validate } from "./html_checkboxes_validate.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { invoke_multiple } from "./invoke_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_input_type } from "./html_input_type.mjs";
import { html_font_size_1em } from "./html_font_size_1em.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { html_element } from "./html_element.mjs";
import { app_shared_container_centered } from "./app_shared_container_centered.mjs";
import { app_shared_style_control_font_size } from "./app_shared_style_control_font_size.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
export function html_checkboxes(
  context,
  container_main_get,
  button_back,
  top_text,
  value_previous_get,
  checkbox_name,
  choices,
  on_next,
  button_next,
  valid_get,
) {
  "A whole screen of tick boxes: a line of words at the top, one big box per choice with its title and the sentence under it, a way back, and a way on that only works once what is ticked is allowed.";
  "Everything about the screen that is not the choices is handed in as something to call rather than written here - where the main part of the page goes, how the back button is drawn, how the on button is drawn, what counts as allowed. That is what lets one screen serve every place in every app that asks a person to tick something, without any of them agreeing about how their pages look.";
  "The whole box is what takes the tap, not the little square inside it. A square is a hard thing to hit with a thumb, and a row that only responds in one corner reads as a screen that is not listening.";
  "Whatever was ticked last time is put back by running that box's own tap, once the boxes all exist. Ticking it directly would set the square and leave everything the tap also does undone - the styling of the box, and the deciding of whether the on button is allowed yet - so the screen would come up looking untouched and refusing to go on.";
  let root = html_clear_context(context);
  let container_main = container_main_get(root);
  button_back(context, container_main);
  let div = html_div_text(container_main, top_text);
  html_centered(div);
  let value2 = app_shared_style_control_font_size();
  html_style_font_size(div, value2);
  html_style_padding(div, "0.6em");
  let checkboxes = null;
  let bn = null;
  let value_previous = value_previous_get();
  let afters = [];
  function lambda({ title, details, value }) {
    let container = app_shared_container_centered(container_main);
    let label = html_element(container, "label");
    app_shared_style_control(container);
    html_font_size_1em(container);
    let checkbox = html_input_type(label, "checkbox");
    async function on_click() {
      let r = await html_checkboxes_on_click(
        checkboxes,
        checkbox,
        container,
        valid_get,
        bn,
      );
      return r;
    }
    html_on_click(container, on_click);
    if (equal(value, value_previous)) {
      list_add(afters, on_click);
    }
    html_attribute_set(checkbox, "name", checkbox_name);
    html_attribute_set(checkbox, "value", value);
    html_style_assign(checkbox, {
      transform: "scale(2)",
      margin: "1em",
    });
    let s = html_span_text(label, title);
    let value3 = app_shared_style_control_font_size();
    html_style_font_size(s, value3);
    html_div_text(label, details);
    object_merge_set(checkbox, {
      container,
    });
    return checkbox;
  }
  checkboxes = list_map(choices, lambda);
  function lambda6() {
    let r2 = html_checkboxes_lambda6(checkboxes, on_next);
    return r2;
  }
  bn = button_next(container_main, lambda6);
  html_checkboxes_validate(false, checkboxes, bn);
  invoke_multiple(afters);
}
