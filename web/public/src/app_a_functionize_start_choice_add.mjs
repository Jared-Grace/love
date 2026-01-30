import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
import { global_function_exists_not } from "../../../love/public/src/global_function_exists_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_a_functionize } from "../../../love/public/src/app_a_functionize.mjs";
export function app_a_functionize_start_choice_add(choices, a, o) {
  marker("1");
  let ne = global_function_exists_not(app_a_functionize);
  if (ne) {
    list_add(choices, {
      shortcut: "f",
      text: "Functionize start",
      fn: async function lambda() {
        global_function_set(app_a_functionize, a);
        let overlay_close = object_property_get(o, "overlay_close");
        overlay_close();
      },
    });
  }
}
