import { property_delete } from "../../../love/public/src/property_delete.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { app_a_function_on_change } from "../../../love/public/src/app_a_function_on_change.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { app_a_input } from "../../../love/public/src/app_a_input.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_a_overlay_on_enter } from "../../../love/public/src/app_a_overlay_on_enter.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_a_functionize } from "../../../love/public/src/app_a_functionize.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_functionize_end_choice_add(a, choices, o2) {
  let context = object_property_get(a, "context");
  let e = object_property_exists(context, app_a_functionize.name);
  if (e) {
    list_add(choices, {
      shortcut: "f",
      text: "Functionize end",
      fn: async function lambda() {
        let r = app_a_overlay_on_enter(on_enter, o2, a);
        let o = object_property_get(r, "overlay_result");
        let overlay = object_property_get(o, "overlay");
        let oc = object_property_get(r, "container");
        let div = html_div_text(oc, "Name of new function:");
        let input = app_a_input(overlay);
        html_focus(input);
        async function on_enter() {
          let value_new = html_value_get(input);
          await app_a_functionize(a, value_new);
          await app_a_function_on_change(a, o);
          property_delete(context, app_a_functionize.name);
        }
        let component = app_a_button_wide(overlay, "Functionize", on_enter);
      },
    });
  }
}
