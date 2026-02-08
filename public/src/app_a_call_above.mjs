import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_a_function_on_change } from "../../../love/public/src/app_a_function_on_change.mjs";
import { js_call_new_insert } from "../../../love/public/src/js_call_new_insert.mjs";
import { app_a_node_index } from "../../../love/public/src/app_a_node_index.mjs";
import { app_a_functions_overlay } from "../../../love/public/src/app_a_functions_overlay.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_call_above(o, a) {
  let v5 = {
    shortcut: "a",
    text: "Add above",
    fn: async function lambda2() {
      let overlay_close = object_property_get(o, "overlay_close");
      overlay_close();
      let v2 = await app_a_functions_overlay(a, on_select);
      let overlay_result = object_property_get(v2, "overlay_result");
      async function on_select(f_name_call) {
        let v = app_a_node_index(a);
        let stack = object_property_get(v, "stack");
        let index = object_property_get(v, "index");
        let list = object_property_get(v, "list");
        let ast = object_property_get(a, "ast");
        let parsed = await js_call_new_insert(
          f_name_call,
          ast,
          list,
          index,
          stack,
        );
        await app_a_function_on_change(overlay_result, a);
      }
    },
  };
  list_add(choices, v5);
  return v5;
}
