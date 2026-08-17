import { property_get } from "./property_get.mjs";
import { app_a_identifier_generic_choices_get_choice_function_open } from "./app_a_identifier_generic_choices_get_choice_function_open.mjs";
import { app_a_identifier_generic_choices_get_includes } from "./app_a_identifier_generic_choices_get_includes.mjs";
import { app_a_identifier_generic_choices_get_ast } from "./app_a_identifier_generic_choices_get_ast.mjs";
import { app_a_identifier_generic_choices_get_lambda4 } from "./app_a_identifier_generic_choices_get_lambda4.mjs";
import { app_a_identifier_generic_choices_get_lambda6 } from "./app_a_identifier_generic_choices_get_lambda6.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
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
  let r = app_a_identifier_generic_choices_get_choice_function_open(
    r4,
    a,
    name,
    choices,
  );
  let ast = property_get(r, "ast");
  let stack = property_get(r, "stack");
  let context = property_get(r, "context");
  let e = property_get(r, "e");
  let includes = property_get(r, "includes");
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
