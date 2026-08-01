import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_any } from "./list_any.mjs";
import { property_get } from "./property_get.mjs";
export function js_offset_inside_function_is(ast, offset) {
  "Whether a place in the source sits inside some function rather than out at the top of the file. What can be written at the two places differs: a statement in a function body has a block around it, and a statement at the top of a file has nothing around it at all.";
  "The distinction earns its keep when a comment is rewritten as a statement holding a call. Pulling that call out into a local of its own is a step the normalize pipeline always takes, and at the top of a file there is nowhere to put the local, so the step gives up and takes the whole file with it - every later step included.";
  let functions = js_list_type_nodes(ast, "FunctionDeclaration");
  let expressions = js_list_type_nodes(ast, "FunctionExpression");
  let arrows = js_list_type_nodes(ast, "ArrowFunctionExpression");
  let all = list_concat_multiple([functions, expressions, arrows]);
  function contains_is(node) {
    let start = property_get(node, "start");
    let end = property_get(node, "end");
    let after = greater_than(offset, start);
    let before = less_than(offset, end);
    let inside_inner = after && before;
    return inside_inner;
  }
  let inside = list_any(all, contains_is);
  return inside;
}
