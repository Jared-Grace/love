import { js_statement_return_insert_code } from "./js_statement_return_insert_code.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { app_a_list_overlay_generic } from "./app_a_list_overlay_generic.mjs";
import { app_a_cut } from "./app_a_cut.mjs";
import { app_a_function_on_change } from "./app_a_function_on_change.mjs";
import { js_call_new_insert } from "./js_call_new_insert.mjs";
import { app_a_node_index } from "./app_a_node_index.mjs";
import { app_a_functions_overlay } from "./app_a_functions_overlay.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_a_statement_choices_add(choices, a, o) {
  let ab = {
    shortcut: "a",
    text: "Add call above",
    fn: async function lambda() {
      let overlay_close = property_get(o, "overlay_close");
      overlay_close();
      let v2 = await app_a_functions_overlay(a, on_select);
      let overlay_result = property_get(v2, "overlay_result");
      async function on_select(f_name_call) {
        let v = app_a_node_index(a);
        let stack = property_get(v, "stack");
        let index = property_get(v, "index");
        let list = property_get(v, "list");
        let ast = property_get(a, "ast");
        let parsed = await js_call_new_insert(
          f_name_call,
          ast,
          list,
          index,
          stack,
        );
        await app_a_function_on_change(a, overlay_result);
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
      fn: async function lambda() {
        let overlay_close = property_get(o, "overlay_close");
        overlay_close();
        let ast2 = property_get(a, "ast");
        let i_names = js_identifiers_names(ast2);
        let v2 = app_a_list_overlay_generic(
          a,
          i_names,
          "identifier",
          on_select,
        );
        let overlay_result = property_get(v2, "overlay_result");
        async function on_select(identifier_name) {
          let v = app_a_node_index(a);
          let list = property_get(v, "list");
          let index = property_get(v, "index");
          js_statement_return_insert_code(
            list,
            text_combine(index, 1),
            identifier_name,
          );
          await app_a_function_on_change(a, overlay_result);
        }
      },
    },
  ]);
}
