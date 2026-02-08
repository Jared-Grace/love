import { js_return_identifier_name } from "../../../love/public/src/js_return_identifier_name.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_identifier_unique_ast } from "../../../love/public/src/js_identifier_unique_ast.mjs";
import { js_return_name } from "../../../love/public/src/js_return_name.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_a_functions_overlay_generic } from "../../../love/public/src/app_a_functions_overlay_generic.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_a_function_name_selected_key } from "../../../love/public/src/app_a_function_name_selected_key.mjs";
import { app_a_functionize_choices_add } from "../../../love/public/src/app_a_functionize_choices_add.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
import { app_a_function_overlay_refresh } from "../../../love/public/src/app_a_function_overlay_refresh.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { function_param_delete } from "../../../love/public/src/function_param_delete.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { list_get_end_2 } from "../../../love/public/src/list_get_end_2.mjs";
import { js_visit_match_first } from "../../../love/public/src/js_visit_match_first.mjs";
import { app_a_overlay_on_enter } from "../../../love/public/src/app_a_overlay_on_enter.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { clipboard_paste } from "../../../love/public/src/clipboard_paste.mjs";
import { html_rows_set } from "../../../love/public/src/html_rows_set.mjs";
import { list_remove_at_count } from "../../../love/public/src/list_remove_at_count.mjs";
import { app_a_node_index } from "../../../love/public/src/app_a_node_index.mjs";
import { app_a_input_integer } from "../../../love/public/src/app_a_input_integer.mjs";
import { app_a_function_on_change } from "../../../love/public/src/app_a_function_on_change.mjs";
import { app_a_overlay_choices } from "../../../love/public/src/app_a_overlay_choices.mjs";
import { app_a_overlay_container_centered } from "../../../love/public/src/app_a_overlay_container_centered.mjs";
import { app_a_textarea } from "../../../love/public/src/app_a_textarea.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { app_a_function_select } from "../../../love/public/src/app_a_function_select.mjs";
import { app_a_function_on_keydown_remove } from "../../../love/public/src/app_a_function_on_keydown_remove.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_select } from "../../../love/public/src/html_select.mjs";
import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { app_a_input } from "../../../love/public/src/app_a_input.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { html_on_enter_lambda } from "../../../love/public/src/html_on_enter_lambda.mjs";
import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { app_a_overlay_keydown } from "../../../love/public/src/app_a_overlay_keydown.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_identifier_generic(
  a,
  span,
  name,
  c,
  lines_multiple,
  replace,
) {
  async function choices_get(o3, choices) {
    let node = object_property_get(a, "node");
    let ast = object_property_get(a, "ast");
    let v_match = js_visit_match_first(ast, node);
    let stack = object_property_get(v_match, "stack");
    let e2 = list_get_end_2(stack);
    let overlay_close = object_property_get(o3, "overlay_close");
    let overlay = object_property_get(o3, "overlay");
    let oc = app_a_overlay_container_centered(overlay);
    let div4 = html_div_text(oc, name);
    let context = object_property_get(a, "context");
    const change = {
      fn: async function lambda15() {
        let r = app_a_overlay_on_enter(on_enter, o3, a);
        let o = object_property_get(r, "overlay_result");
        let overlay = object_property_get(o, "overlay");
        let oc = object_property_get(r, "container");
        let text2 = object_property_get(change, "text");
        let div2 = html_div_text(oc, text2 + " from:");
        let div = html_div_text(oc, name);
        html_div_text(oc, text2 + " to:");
        let fn = null;
        if (lines_multiple) {
          fn = app_a_textarea;
        } else {
          fn = app_a_input;
        }
        let input = fn(overlay);
        if (lines_multiple) {
          const row_count = 20;
          html_rows_set(input, row_count);
        } else {
          html_centered(input);
        }
        html_value_set(input, name);
        await html_select(input);
        async function on_enter() {
          let value_new = html_value_get(input);
          let on_change = object_property_get(change, "on_change");
          await on_change(value_new);
          await app_a_function_on_change(a, o);
        }
        let component = app_a_button_wide(overlay, text2, on_enter);
      },
    };
    let to2 = object_merge(change, c);
    list_add_multiple(choices, [
      {
        shortcut: "c",
        text: "Copy",
        fn: async function lambda2() {
          await clipboard_copy(name);
          overlay_close();
        },
      },
      change,
      {
        shortcut: "d",
        text: "Delete",
        fn: async function lambda2() {
          let lambda22 = html_on_enter_lambda(lambda23);
          overlay_close();
          let o2 = app_a_overlay_keydown(a, lambda22);
          let overlay = object_property_get(o2, "overlay");
          let oc = app_a_overlay_container_centered(overlay);
          let div3 = html_div_text(
            oc,
            "How many statements do you want to delete?",
          );
          let input = app_a_input_integer(overlay);
          html_centered(input);
          html_value_set(input, 1);
          await html_select(input);
          async function lambda23() {
            let value_new = html_value_get(input);
            let v = app_a_node_index(a);
            let index = object_property_get(v, "index");
            let list = object_property_get(v, "list");
            let removals = list_remove_at_count(list, index, value_new);
            await app_a_function_on_change(a, o2);
          }
          let component = app_a_button_wide(overlay, "Delete", lambda23);
        },
      },
      {
        shortcut: "v",
        text: "Paste replace",
        fn: async function lambda2() {
          let name_new = await clipboard_paste();
          text_is_assert(name_new);
          replace(name_new);
          await app_a_function_on_change(a, o3);
        },
      },
    ]);
    app_a_functionize_choices_add(choices, a, o3);
    let f_names = await functions_names();
    let includes = list_includes(f_names, name);
    if (includes) {
      const choice_function_open = {
        shortcut: "o",
        text: "Open",
        fn: function lambda() {
          overlay_close();
          app_a_function_on_keydown_remove(a);
          app_a_function_select(context, name);
        },
      };
      list_add(choices, choice_function_open);
      const references = {
        shortcut: "s",
        text: "References",
        fn: async function lambda() {
          let result = await data_identifiers_search(name);
          let properties = object_properties(result);
          function lambda3(f_name) {
            app_a_function_select(context, f_name);
          }
          overlay_close();
          let r = app_a_functions_overlay_generic(a, properties, lambda3);
        },
      };
      list_add(choices, references);
    }
    async function lambda6() {
      let e1 = list_get_end_1(stack);
      log({
        e1,
      });
      function lambda7() {
        const c = {
          shortcut: "g",
          text: "Assign result",
          fn: async function lambda() {
            let return_name = null;
            if (includes) {
              let v2 = await function_parse_declaration(name);
              let ast_call = object_property_get(v2, "ast");
              return_name = js_return_name(ast_call);
            } else {
              let property_name = js_return_identifier_name();
              return_name = js_identifier_unique_ast(ast, property_name);
            }
            let assign = js_declare(return_name, e1);
            log({
              assign,
            });
            object_replace(e2, assign);
            await app_a_function_on_change(a, o3);
          },
        };
        list_add(choices, c);
      }
      js_node_type_is_if(e1, "CallExpression", lambda7);
    }
    js_node_type_is_if(e2, "ExpressionStatement", lambda6);
    function lambda4() {
      const c = {
        shortcut: "q",
        text: "Param delete",
        fn: async function lambda() {
          let key = app_a_function_name_selected_key();
          let f_name = storage_local_get_context(context, key);
          await function_param_delete(f_name, name);
          await app_a_function_overlay_refresh(a, o3);
        },
      };
      list_add(choices, c);
    }
    js_node_type_is_if(e2, "FunctionDeclaration", lambda4);
  }
  app_a_overlay_choices(a, span, choices_get);
}
