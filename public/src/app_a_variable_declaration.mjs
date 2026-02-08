import { app_a_function_on_change } from "../../../love/public/src/app_a_function_on_change.mjs";
import { js_call_new_insert } from "../../../love/public/src/js_call_new_insert.mjs";
import { app_a_functions_overlay } from "../../../love/public/src/app_a_functions_overlay.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_a_call_above } from "../../../love/public/src/app_a_call_above.mjs";
import { app_a_node_index } from "../../../love/public/src/app_a_node_index.mjs";
import { app_a_paste } from "../../../love/public/src/app_a_paste.mjs";
import { app_a_functionize_choices_add } from "../../../love/public/src/app_a_functionize_choices_add.mjs";
import { app_a_semicolon } from "../../../love/public/src/app_a_semicolon.mjs";
import { app_a_nodes_list } from "../../../love/public/src/app_a_nodes_list.mjs";
import { app_a_overlay_choices } from "../../../love/public/src/app_a_overlay_choices.mjs";
import { app_a_keyword_blue_space } from "../../../love/public/src/app_a_keyword_blue_space.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_variable_declaration(a) {
  let node = object_property_get(a, "node");
  let parent = object_property_get(a, "parent");
  let kind = object_property_get(node, "kind");
  let k = app_a_keyword_blue_space(parent, kind);
  let keyword = object_property_get(k, "keyword");
  function lambda19(o) {
    let choices = [
      {
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
      },
    ];
    let v5 = app_a_call_above(o, a);
    list_add(choices, v5);
    app_a_functionize_choices_add(choices, a, o);
    let v = app_a_node_index(a);
    let index = object_property_get(v, "index");
    let list = object_property_get(v, "list");
    app_a_paste(choices, a, o, list, index, "above");
    return choices;
  }
  app_a_overlay_choices(a, keyword, lambda19);
  let declarations = object_property_get(node, "declarations");
  app_a_nodes_list(a, declarations, parent);
  app_a_semicolon(parent);
}
