import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { app_a_functionize } from "./app_a_functionize.mjs";
export function app_a_functionize_start_choice_add(choices, a, o) {
  let context = property_get(a, "context");
  let ne = property_exists_not(context, app_a_functionize.name);
  if (ne) {
    list_add(choices, {
      shortcut: "f",
      text: "Functionize start",
      fn: async function lambda() {
        property_set_exists_not(context, app_a_functionize.name, a);
        let overlay_close = property_get(o, "overlay_close");
        overlay_close();
      },
    });
  }
}
