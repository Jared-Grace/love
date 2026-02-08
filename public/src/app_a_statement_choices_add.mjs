import { app_a_list_chooser } from "../../../love/public/src/app_a_list_chooser.mjs";
import { app_a_button_function } from "../../../love/public/src/app_a_button_function.mjs";
import { object_copy_assign } from "../../../love/public/src/object_copy_assign.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { app_a_overlay } from "../../../love/public/src/app_a_overlay.mjs";
import { js_statement_return_insert_code } from "../../../love/public/src/js_statement_return_insert_code.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
import { app_a_cut } from "../../../love/public/src/app_a_cut.mjs";
import { app_a_function_on_change } from "../../../love/public/src/app_a_function_on_change.mjs";
import { js_call_new_insert } from "../../../love/public/src/js_call_new_insert.mjs";
import { app_a_node_index } from "../../../love/public/src/app_a_node_index.mjs";
import { app_a_functions_overlay } from "../../../love/public/src/app_a_functions_overlay.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_a_statement_choices_add(choices, a, o) {
  let ab = {
    shortcut: "a",
    text: "Add call above",
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
      shortcut: "r",
      text: "Add return below",
      fn: async function lambda2() {
        let overlay_close = object_property_get(o, "overlay_close");
        overlay_close();
        let ast2 = object_property_get(a, "ast");
        let i_names = js_identifiers_names(ast2);
        let overlay_result2 = app_a_overlay(a);
        let overlay = object_property_get(overlay_result2, "overlay");
        html_style_set(overlay, "overflow", "hidden");
        const replacement = {
          root: overlay,
        };
        let context = object_property_get(a, "context");
        let copy = object_copy_assign(context, replacement);
        function lambda3() {
          let overlay_close2 = object_property_get(
            overlay_result2,
            "overlay_close",
          );
          overlay_close2();
        }
        app_a_button_function(context, overlay, lambda3);
        let functions_result = app_a_list_chooser(
          copy,
          "function",
          i_names,
          on_select,
        );
        let v2 = {
          overlay_result2,
          functions_result,
        };
        let overlay_result = object_property_get(v2, "overlay_result");
        async function on_select(identifier_name) {
          let v = app_a_node_index(a);
          let list = object_property_get(v, "list");
          let index = object_property_get(v, "index");
          js_statement_return_insert_code(list, index + 1, identifier_name);
          await app_a_function_on_change(overlay_result, a);
        }
      },
    },
  ]);
}
