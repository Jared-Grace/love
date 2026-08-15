import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { js_statement_work_is } from "./js_statement_work_is.mjs";
import { list_add } from "./list_add.mjs";
export function js_node_statements_work(node) {
  arguments_assert(arguments, 1);
  ("Every line of work anywhere inside this piece of code, however deeply it sits - the prose left out, the marks left out, and the blocks that only hold other lines left out.");
  ("The same count a whole function is measured by, asked of any piece of one instead. That is what lets a part of a body be compared with the body holding it on the one scale that decides whether a function is too big, rather than on a second scale that would have to be argued for on its own.");
  let deep = [];
  function statement_note(inner) {
    let work_is = js_statement_work_is(inner);
    if (work_is) {
      list_add(deep, inner);
    }
  }
  js_visit_nodes(node, statement_note);
  return deep;
}
