import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_functionize_choices_add } from "./app_a_functionize_choices_add.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_to_visitor_stack } from "./js_node_to_visitor_stack.mjs";
import { list_get_end_2 } from "./list_get_end_2.mjs";
import { list_add } from "./list_add.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { list_replace_multiple } from "./list_replace_multiple.mjs";
import { app_a_function_on_change } from "./app_a_function_on_change.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
export function app_a_function_declaration_choices_get(o, choices, a, node) {
  arguments_assert(arguments, 4);
  app_a_functionize_choices_add(choices, a, o);
  let ast = property_get(a, "ast");
  let stack = js_node_to_visitor_stack(ast, node);
  let e = list_get_end_2(stack);
  function lambda6() {
    list_add(choices, {
      shortcut: "l",
      text: "Flatten",
      fn: async function lambda4() {
        let e1 = list_get_end_1(stack);
        let body_block = js_function_declaration_to_block_body(node);
        list_replace_multiple(e1, node, body_block);
        await app_a_function_on_change(a, o);
      },
    });
  }
  js_node_type_is_if(e, "BlockStatement", lambda6);
}
