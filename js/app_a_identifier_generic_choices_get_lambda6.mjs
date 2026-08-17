import { arguments_assert } from "./arguments_assert.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { log } from "./log.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { js_return_identifier_name } from "./js_return_identifier_name.mjs";
import { js_identifier_unique_ast } from "./js_identifier_unique_ast.mjs";
import { js_declare } from "./js_declare.mjs";
import { object_replace } from "./object_replace.mjs";
import { app_a_function_on_change } from "./app_a_function_on_change.mjs";
import { list_add } from "./list_add.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
export async function app_a_identifier_generic_choices_get_lambda6(
  stack,
  includes,
  name,
  ast,
  e,
  a,
  o,
  choices,
) {
  arguments_assert(arguments, 8);
  let e1 = list_get_end_1(stack);
  log(app_a_identifier_generic_choices_get_lambda6.name, {
    e1,
  });
  function lambda7() {
    let choice_assign = {
      shortcut: "g",
      text: "Assign result",
      fn: async function lambda() {
        let return_name = null;
        if (includes) {
          let v = await function_parse_declaration(name);
          let ast_call = property_get(v, "ast");
          return_name = js_return_name(ast_call);
        } else {
          let property_name = js_return_identifier_name();
          return_name = js_identifier_unique_ast(ast, property_name);
        }
        let assign = js_declare(return_name, e1);
        log(app_a_identifier_generic_choices_get_lambda6.name, {
          assign,
        });
        object_replace(e, assign);
        await app_a_function_on_change(a, o);
      },
    };
    list_add(choices, choice_assign);
  }
  js_node_type_is_if(e1, "CallExpression", lambda7);
}
