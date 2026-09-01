import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { js_node_function_is } from "./js_node_function_is.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function js_statement_nodes_own(statement, node_type) {
  arguments_assert(arguments, 2);
  ("$plain node_type");
  ("the kind of parsed code being asked for, written the way the parser writes it.");
  ("The pieces of a kind that the line itself runs, leaving out every one written inside a function standing in that line.");
  ("THE DIFFERENCE IS WHEN THE PIECE RUNS, AND THAT IS THE WHOLE QUESTION A MOVE ASKS. A line runs everything at its own level the moment the line is reached, so those pieces move with it. A function written inside the line runs nothing until somebody calls it, which is somewhere else and usually later - so what it names is not read at this line at all, and a reader that counted it would refuse a move for a reading that never happens here.");
  ("Its neighbour asks the same question one level out, of a file's own function rather than of one line, and counts a stack of one where this counts a stack of none. Both are counting the functions standing between the piece and the thing being asked about; only the thing being asked about differs.");
  let vs = js_list_type(statement, node_type);
  let own = [];
  for (let v of vs) {
    let stack = property_get(v, "stack");
    let depth = list_filter_size(stack, js_node_function_is);
    let own_is = equal(depth, 0);
    if (own_is) {
      let node = property_get(v, "node");
      list_add(own, node);
    }
  }
  return own;
}
