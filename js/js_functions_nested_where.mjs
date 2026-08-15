import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_function_nodes_visitors } from "./js_list_function_nodes_visitors.mjs";
import { js_flo } from "./js_flo.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { equal } from "./equal.mjs";
export function js_functions_nested_where(ast, keep) {
  arguments_assert(arguments, 2);
  ("Every function written inside the exported one that the given question says yes to, however deep it sits, in the order they are written.");
  ("The exported function is left out, so asking about a file's closures cannot hand back the file itself - which as an address would be a move that empties the file, and as a size would be the number the question was asked to break down.");
  ("The walk and the question are apart because there is more than one kind of function worth asking for and only one right way to walk to them. Written together, a second kind meant a second copy of the walk, and the two copies would then have to agree about which function counts as the outer one.");
  ("The node's own kind is what the question is put to, not the kinds anywhere inside it. A reader that collects every kind in a subtree says yes to an arrow function that merely holds a declaration somewhere.");
  let visitors = js_list_function_nodes_visitors(ast);
  let outer = js_flo(ast);
  function lambda(collect) {
    function visitor_each(v) {
      let node = property_get(v, "node");
      let same = equal(node, outer);
      if (same) {
        return;
      }
      let kept = keep(node);
      if (kept) {
        collect(node);
      }
    }
    each(visitors, visitor_each);
  }
  let found = list_adder(lambda);
  return found;
}
