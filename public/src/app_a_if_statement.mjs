import { object_copy_assign } from "../../../love/public/src/object_copy_assign.mjs";
import { app_a_overlay } from "../../../love/public/src/app_a_overlay.mjs";
import { js_call_new_insert } from "../../../love/public/src/js_call_new_insert.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_filter_last } from "../../../love/public/src/list_filter_last.mjs";
import { list_index_of_end } from "../../../love/public/src/list_index_of_end.mjs";
import { js_stack_list_block_is } from "../../../love/public/src/js_stack_list_block_is.mjs";
import { list_next } from "../../../love/public/src/list_next.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { app_a_overlay_choices } from "../../../love/public/src/app_a_overlay_choices.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_keyword_else } from "../../../love/public/src/js_keyword_else.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { app_a_parenthesis_wrap } from "../../../love/public/src/app_a_parenthesis_wrap.mjs";
import { app_a_function_node_child } from "../../../love/public/src/app_a_function_node_child.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_a_keyword_purple_space } from "../../../love/public/src/app_a_keyword_purple_space.mjs";
import { js_keyword_if } from "../../../love/public/src/js_keyword_if.mjs";
export function app_a_if_statement(a, node, parent) {
  marker("1");
  let k = js_keyword_if();
  let v4 = app_a_keyword_purple_space(parent, k);
  let keyword = object_property_get(v4, "keyword");
  async function lambda(o) {
    let choices = [
      {
        shortcut: "a",
        text: "Add above",
        fn: async function lambda2() {
          overlay_close();
          function lambda4(e) {}
          let o = app_a_overlay(a, lambda4);
          let overlay = object_property_get(o, "overlay");
          let overlay_close2 = object_property_get(o, "overlay_close");
          const replacement = {
            root: overlay,
          };
          object_copy_assign(context, replacement);
          async function on_select(f_name_call) {
            let ast = object_property_get(a, "ast");
            let v_match = js_visit_match(ast, node);
            let stack = object_property_get(v_match, "stack");
            function lambda3(item) {
              let index_end = list_index_of_end(stack, item);
              let i = js_stack_list_block_is(stack, index_end);
              return i;
            }
            let list = list_filter_last(stack, lambda3);
            let statement = list_next(stack, list);
            let index = list_index_of(list, statement);
            let parsed = await js_call_new_insert(
              f_name_call,
              ast,
              list,
              index,
              stack,
            );
            overlay_close2();
          }
          await app_a_functions_generic(replacement, on_select);
        },
      },
    ];
    return choices;
  }
  app_a_overlay_choices(a, keyword, lambda);
  function lambda19() {
    let test = object_property_get(node, "test");
    app_a_function_node_child(a, test);
  }
  app_a_parenthesis_wrap(parent, lambda19);
  html_span_space(parent);
  let consequent = object_property_get(node, "consequent");
  app_a_function_node_child(a, consequent);
  let alternate = object_property_get(node, "alternate");
  let nn = null_not_is(alternate);
  if (nn) {
    html_span_space(parent);
    let kw = js_keyword_else();
    app_a_keyword_purple_space(parent, kw);
    app_a_function_node_child(a, alternate);
  }
}
