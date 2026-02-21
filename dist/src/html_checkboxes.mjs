import { app_karate_button_background_invalid } from "../../../karate_code/public/src/app_karate_button_background_invalid.mjs";
import { sleep_0 } from "../../../love/public/src/sleep_0.mjs";
import { html_checkboxes_checked_value_get } from "../../../love/public/src/html_checkboxes_checked_value_get.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { app_karate_validate_style_assign } from "../../../karate_code/public/src/app_karate_validate_style_assign.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { html_rgba_to_rgb } from "../../../love/public/src/html_rgba_to_rgb.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_checked_set } from "../../../love/public/src/html_checked_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_input_type } from "../../../love/public/src/html_input_type.mjs";
import { html_font_size_1em } from "../../../love/public/src/html_font_size_1em.mjs";
import { app_karate_style_control } from "../../../karate_code/public/src/app_karate_style_control.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { app_karate_container_centered } from "../../../karate_code/public/src/app_karate_container_centered.mjs";
import { app_karate_style_control_font_size } from "../../../karate_code/public/src/app_karate_style_control_font_size.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_karate_container_main } from "../../../karate_code/public/src/app_karate_container_main.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function html_checkboxes(
  context,
  button_back,
  top_text,
  value_previous_get,
  checkbox_name,
  choices,
  on_next,
  button_next,
  valid_get,
) {
  let root = html_clear_context(context);
  let container_main = app_karate_container_main(root);
  button_back(context, container_main);
  let div = html_div_text(container_main, top_text);
  html_centered(div);
  html_style_assign(div, {
    "font-size": app_karate_style_control_font_size(),
  });
  html_style_assign(div, {
    padding: "0.6em",
  });
  let checkboxes = null;
  let bn = null;
  let value_previous = value_previous_get();
  let afters = [];
  function lambda({ title, details, value }) {
    let container = app_karate_container_centered(container_main);
    let label = html_element(container, "label");
    app_karate_style_control(container);
    html_font_size_1em(container);
    let checkbox = html_input_type(label, "checkbox");
    async function on_click() {
      function lambda2(r) {
        let container2 = property_get(r, "container");
        html_style_assign(container2, {
          "box-shadow": "none",
        });
        html_checked_set(r, false);
      }
      each(checkboxes, lambda2);
      html_checked_set(checkbox, true);
      const selected = "#5ffb84ff";
      html_style_assign(container, {
        "background-color": selected,
      });
      await sleep_0();
      let valid = valid_get(checkboxes);
      validate(valid);
      let ci = app_karate_button_background_invalid();
      const c = valid ? "#4ad66bff" : ci;
      html_style_assign(container, {
        "box-shadow":
          "inset 0 0 0 .15em " +
          html_rgba_to_rgb(c) +
          ", inset 0 0 0 .3em white",
      });
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
    html_style_assign(s, {
      "font-size": app_karate_style_control_font_size(),
    });
    let div = html_div_text(label, details);
    object_merge(checkbox, {
      container,
    });
    return checkbox;
  }
  checkboxes = list_map(choices, lambda);
  function lambda6() {
    let value_checked = html_checkboxes_checked_value_get(checkboxes);
    let v = on_next({
      value_checked,
    });
    return v;
  }
  bn = button_next(container_main, lambda6);
  function validate(valid) {
    let containers = list_map_property(checkboxes, "container");
    app_karate_validate_style_assign(valid, containers, null, bn);
  }
  validate(false);
  invoke_multiple(afters);
}
