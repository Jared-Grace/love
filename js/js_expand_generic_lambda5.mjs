import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { js_node_to_visitor } from "./js_node_to_visitor.mjs";
import { js_node_atomize_name } from "./js_node_atomize_name.mjs";
import { js_node_atomize } from "./js_node_atomize.mjs";
export async function js_expand_generic_lambda5(arg, arg_index, ast) {
  arguments_assert(arguments, 3);
  let jin = js_identifier_not_is(arg);
  if (jin) {
    let offset = 0;
    let arg_v = js_node_to_visitor(ast, arg);
    let variable_name = js_node_atomize_name();
    await js_node_atomize(ast, arg_v, variable_name, offset);
  }
}
