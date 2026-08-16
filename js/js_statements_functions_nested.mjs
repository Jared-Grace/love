import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { js_visit_function_nodes } from "./js_visit_function_nodes.mjs";
import { list_adder } from "./list_adder.mjs";
import { property_get } from "./property_get.mjs";
export function js_statements_functions_nested(statements) {
  arguments_assert(arguments, 1);
  ("Every function written anywhere inside a run of lines, however deep it sits, in the order they are written.");
  ("A run of lines has no outer function of its own to leave out, which is the whole difference between this and the reading that asks the same of a file. There the file's own exported function has to be stepped over; here a function standing as a line of the run is one of the answers, and usually the one that matters.");
  ("Asked when something needs to know what a run would take with it if it moved. A line of plain work is finished the moment it is read; a function is not, and goes on reading the names around it for as long as anything holds onto it.");
  function lambda(collect) {
    function statement_each(statement) {
      function visitor_each(v) {
        let node = property_get(v, "node");
        collect(node);
      }
      js_visit_function_nodes(statement, visitor_each);
    }
    each(statements, statement_each);
  }
  let found = list_adder(lambda);
  return found;
}
