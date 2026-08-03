import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_function_nodes_visitors } from "./js_list_function_nodes_visitors.mjs";
import { js_flo } from "./js_flo.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { equal } from "./equal.mjs";
export function js_functions_nested_declarations(ast) {
  arguments_assert(arguments, 1);
  ("Every function declared inside the exported one, however deep it sits, in the order they are written.");
  ("The exported function is left out, so asking about a file's closures cannot hand back the file itself - which as an address would be a move that empties the file, and as a size would be the number the question was asked to break down.");
  ("Only declarations. A function written as a value is reached by whatever holds it, has no name of its own to be addressed by, and sits in a container that is not a list of statements, so nothing that moves one can move it.");
  ("The node's own type is asked, not the types anywhere inside it. The reader that collects every type in a subtree says yes to an arrow function that merely holds a declaration somewhere.");
  let visitors = js_list_function_nodes_visitors(ast);
  let outer = js_flo(ast);
  function lambda(collect) {
    function visitor_each(v) {
      let node = property_get(v, "node");
      let same = equal(node, outer);
      if (same) {
        return;
      }
      let node_type = js_node_type(node);
      let declaration_is = equal(node_type, "FunctionDeclaration");
      if (declaration_is) {
        collect(node);
      }
    }
    each(visitors, visitor_each);
  }
  let declarations = list_adder(lambda);
  return declarations;
}
