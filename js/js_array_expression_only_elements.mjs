import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_single_message } from "./list_single_message.mjs";
import { js_array_expression_elements } from "./js_array_expression_elements.mjs";
export function js_array_expression_only_elements(ast) {
  "The items of the only list written out in this code, refusing when there is not exactly one list for it to have meant.";
  "The neighbour named for a single list takes the first one it finds instead, which is a different thing wherever a function writes out more than one. Adding an item to the first of several is silent and wrong, and the caller who asked for it had one list in mind - so this one says so rather than guessing which.";
  arguments_assert(arguments, 1);
  let node_type = "ArrayExpression";
  let nodes = js_list_type_nodes(ast, node_type);
  let lists = list_size(nodes);
  let message = {
    hint: "this wants a function that writes out exactly one list - would you like to name one that does, or to say which of these lists you meant?",
    lists,
  };
  let node = list_single_message(nodes, message);
  let elements = js_array_expression_elements(node);
  return elements;
}
