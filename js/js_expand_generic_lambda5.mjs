import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { js_node_to_visitor } from "./js_node_to_visitor.mjs";
import { js_node_atomize_name } from "./js_node_atomize_name.mjs";
import { js_node_atomize } from "./js_node_atomize.mjs";
export async function js_expand_generic_lambda5(arg, ast) {
  arguments_assert(arguments, 2);
  ("one argument of a call being expanded: where it is anything but a plain name, it is given a name of its own on a line above and the call reads that name instead");
  ("it asked for a third thing between the two it reads - where the argument sat among the others - and its one caller never handed that over. so the name of the file was bound to the tree, the tree was bound to nothing, and the line counting arguments threw before either could be read. the count was right about the declaration and the declaration was wrong, which is why the gate that holds those two together saw nothing");
  let jin = js_identifier_not_is(arg);
  if (jin) {
    let offset = 0;
    let arg_v = js_node_to_visitor(ast, arg);
    let variable_name = js_node_atomize_name();
    await js_node_atomize(ast, arg_v, variable_name, offset);
  }
}
