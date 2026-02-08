import { app_a_functions_overlay_generic } from "../../../love/public/src/app_a_functions_overlay_generic.mjs";
import { app_a_functions_generic_f_names } from "../../../love/public/src/app_a_functions_generic_f_names.mjs";
import { app_a_cut } from "../../../love/public/src/app_a_cut.mjs";
import { app_a_function_on_change } from "../../../love/public/src/app_a_function_on_change.mjs";
import { js_call_new_insert } from "../../../love/public/src/js_call_new_insert.mjs";
import { app_a_node_index } from "../../../love/public/src/app_a_node_index.mjs";
import { app_a_functions_overlay } from "../../../love/public/src/app_a_functions_overlay.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_a_statement_choices_add(choices, a, o) {
  let ab = {
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
  let c = app_a_cut(o, a);
  list_add_multiple(choices, [
    ab,
    c,
    {
      shortcut: "a",
      text: "Add above",
      fn: async function lambda2() {
        let overlay_close = object_property_get(o, "overlay_close");
        overlay_close();
        let f_names = await app_a_functions_generic_f_names();
        let v2 = app_a_functions_overlay_generic(a, f_names, on_select);
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
    },
  ]);
}
