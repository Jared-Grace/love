import { property_list_get_end_1 } from "./property_list_get_end_1.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_prose_statement_nodes } from "./js_prose_statement_nodes.mjs";
import { list_get } from "./list_get.mjs";
import { list_adder_invoke } from "./list_adder_invoke.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_prose_statement_remove(ast, index) {
  "Takes one line of explanation out of this code, counting from nought over the lines in the order they are written.";
  "The line has to be found twice, and that is not waste. The first reading gets which line was meant; the walk gets the list it is sitting in, which is the only thing that can take it out - a statement handed over on its own knows nothing about where it stands.";
  "The taking out is held back until the walk has finished rather than done as the line is found. Shortening a list while something is stepping through it moves everything after the gap up by one, and the step that follows then reads past the line it was about to visit.";
  arguments_assert(arguments, 2);
  let statements = js_prose_statement_nodes(ast);
  let target = list_get(statements, index);
  function lambda(la) {
    function lambda_visit(v) {
      let node = property_get(v, "node");
      let body = property_list_get_end_1(v, "stack");
      let found = equal(node, target);
      if (found) {
        function lambda_remove() {
          list_remove(body, node);
        }
        la(lambda_remove);
      }
    }
    js_visit_type(ast, "ExpressionStatement", lambda_visit);
  }
  list_adder_invoke(lambda);
}
