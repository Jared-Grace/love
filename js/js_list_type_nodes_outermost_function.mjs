import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_node_function_is } from "./js_node_function_is.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function js_list_type_nodes_outermost_function(ast, node_type) {
  arguments_assert(arguments, 2);
  ("The nodes of a kind written in a file's own function and in none of the functions standing inside it.");
  ("Its neighbour hands back every node of the kind anywhere in the file, which is the right answer when the question is about the text. It is the wrong answer when the question is about a name, because a name means whatever the nearest scope binds it to, and a walk over the whole file cannot tell that scope from any other. Two side-by-side scopes may bind one name and nothing anywhere goes red about it - the shadowing gates allow it deliberately, since neither scope can see the other - so a reader that takes the first line binding a name will hand back a nested helper's value to somebody asking about the function's own.");
  ("Found rather than imagined. A gate bound its answer to the usual name for one, a nested helper of its own bound an empty list to that same name a few lines above, and the reader looking for what the gate hands back stepped from the returned name to the empty list. The gate was named as saying nothing about how much it had reached while it was saying exactly that.");
  ("One function deep is what is asked for rather than a named scope, because a file here holds one exported function and everything else in it stands inside that one. A node at the top of the file, outside every function, is left out for the same reason a node inside a nested one is: neither is the function being asked about.");
  let vs = js_list_type(ast, node_type);
  let outermost = [];
  for (let v of vs) {
    let stack = property_get(v, "stack");
    let functions = list_filter(stack, js_node_function_is);
    let depth = list_size(functions);
    let own_is = equal(depth, 1);
    if (own_is) {
      let node = property_get(v, "node");
      list_add(outermost, node);
    }
  }
  return outermost;
}
