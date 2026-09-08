import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_function_nodes_visitors } from "./js_list_function_nodes_visitors.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
export function js_function_declaration_nested_params_names(declaration) {
  "The names the functions written inside this one give to what is handed to them, however deep they sit.";
  "The one kind of private name a shape reader does not yet take away. It blanks the function's own name, the names of the things handed to it, and the names it binds along the way - and a name bound inside it counts, so a callback's own name goes and so does a name that callback declares. Only the callback's parameter stays, and nothing about it is any more visible from outside than the rest.";
  "What that costs is the same word twice: two functions that are the same work read as different work whenever their callbacks disagree about what to call the thing being walked. Two ways of turning a record into a list of its values met exactly this and could not be joined, one calling the walked thing a word and the other a name.";
  "It is separate from the list of a function's own private names and is not yet joined to it, because joining them changes what every duplicate reading in the repo answers, and four gates ratchet on those answers. Measured 2026-09-08 over 15997 functions: 3091 hold such a name, and joining the two lists adds exactly one whole-function group and takes none away. The size is not the price; the one group is.";
  arguments_assert(arguments, 1);
  let visitors = js_list_function_nodes_visitors(declaration);
  function node_of(visitor) {
    let node = property_get(visitor, "node");
    return node;
  }
  let nodes = list_map(visitors, node_of);
  function inner_is(node) {
    let itself = equal(node, declaration);
    let nested = not(itself);
    return nested;
  }
  let inner = list_filter(nodes, inner_is);
  let names = list_map_squash(inner, js_function_declaration_params_names);
  return names;
}
