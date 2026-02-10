import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_a_functionize } from "../../../love/public/src/app_a_functionize.mjs";
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
