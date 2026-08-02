import { list_includes_not } from "./list_includes_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_prose_literal_nodes } from "./js_prose_literal_nodes.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_literals_used(ast) {
  "Every literal a function writes as a value rather than as an explanation.";
  "A comment in this repo is a string standing alone as its own statement, so anything asking what a function actually holds has to take those out first. Nothing in the text tells the two apart - only where the node sits, which is why this cannot be left to whoever is asking.";
  arguments_assert(arguments, 1);
  let prose = js_prose_literal_nodes(ast);
  let literals = js_list_type_nodes(ast, "Literal");
  function written_as_value_is(node) {
    let used = list_includes_not(prose, node);
    return used;
  }
  let r = list_filter(literals, written_as_value_is);
  return r;
}
