import { property_get } from "./property_get.mjs";
import { app_a_identifier_generic_choices_get_includes } from "./app_a_identifier_generic_choices_get_includes.mjs";
import { app_a_identifier_generic_choices_get_ast } from "./app_a_identifier_generic_choices_get_ast.mjs";
import { app_a_identifier_generic_choices_get_lambda4 } from "./app_a_identifier_generic_choices_get_lambda4.mjs";
import { app_a_identifier_generic_choices_get_lambda6 } from "./app_a_identifier_generic_choices_get_lambda6.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_function_on_keydown_remove } from "./app_a_function_on_keydown_remove.mjs";
import { app_a_function_select } from "./app_a_function_select.mjs";
import { list_add } from "./list_add.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { properties_get } from "./properties_get.mjs";
import { app_a_functions_overlay_generic } from "./app_a_functions_overlay_generic.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
export async function app_a_identifier_generic_choices_get(
  o,
  choices,
  a,
  name,
  lines_multiple,
  c,
  replace,
) {
  arguments_assert(arguments, 7);
  let r3 = await app_a_identifier_generic_choices_get_ast(
    a,
    o,
    name,
    lines_multiple,
    c,
    choices,
    replace,
  );
  let r4 = app_a_identifier_generic_choices_get_includes(r3, name);
  let includes = property_get(r4, "includes");
  let e = property_get(r4, "e");
  let overlay_close = property_get(r4, "overlay_close");
  let context = property_get(r4, "context");
  let stack = property_get(r4, "stack");
  let ast = property_get(r4, "ast");
  if (includes) {
    let choice_function_open = {
      shortcut: "o",
      text: "Open",
      fn: async function lambda() {
        overlay_close();
        app_a_function_on_keydown_remove(a);
        await app_a_function_select(context, name);
      },
    };
    list_add(choices, choice_function_open);
    let references = {
      shortcut: "s",
      text: "References",
      fn: async function lambda() {
        let result = await data_identifiers_search(name);
        let properties = properties_get(result);
        async function lambda3(f_name) {
          await app_a_function_select(context, f_name);
        }
        overlay_close();
        let r = app_a_functions_overlay_generic(a, properties, lambda3);
      },
    };
    list_add(choices, references);
  }
  async function lambda6() {
    let r2 = await app_a_identifier_generic_choices_get_lambda6(
      stack,
      includes,
      name,
      ast,
      e,
      a,
      o,
      choices,
    );
    return r2;
  }
  js_node_type_is_if(e, "ExpressionStatement", lambda6);
  function lambda4() {
    let r5 = app_a_identifier_generic_choices_get_lambda4(
      context,
      name,
      a,
      o,
      choices,
    );
    return r5;
  }
  js_node_type_is_if(e, "FunctionDeclaration", lambda4);
}
