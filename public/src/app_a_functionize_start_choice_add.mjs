import { marker } from "../../../love/public/src/marker.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_a_functionize } from "../../../love/public/src/app_a_functionize.mjs";
export function app_a_functionize_start_choice_add(choices, a, o) {
  marker("1");
  let ne = global_function_exists_not(context, app_a_functionize.name);
  if (ne) {
    list_add(choices, {
      shortcut: "f",
      text: "Functionize start",
      fn: async function lambda() {
        let context = object_property_get(a, "context");
        global_function_property_set(context, app_a_functionize.name, a);
        let overlay_close = object_property_get(o, "overlay_close");
        overlay_close();
      },
    });
  }
}
