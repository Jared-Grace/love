import { list_add } from "./list_add.mjs";
import { js_declare } from "./js_declare.mjs";
import { js_identifier_unique_ast } from "./js_identifier_unique_ast.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { list_first_second } from "./list_first_second.mjs";
export async function js_dollar_g({ remaining, node, stack1, ast, afters }) {
  let { first: object_name, second: property_name } =
    list_first_second(remaining);
  let code_string = await js_code_string(property_name);
  let code = js_code_call_args(object_property_get.name, [
    object_name,
    code_string,
  ]);
  let parsed = js_parse_expression(code);
  object_replace(node, parsed);
  list_add(afters, $f);
  if (js_node_type_is(stack1, "ExpressionStatement")) {
    let unique = js_identifier_unique_ast(ast, property_name);
    let assign = js_declare(unique, parsed);
    object_replace(stack1, assign);
  }
}
