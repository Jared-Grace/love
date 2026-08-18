import { js_visit_type } from "./js_visit_type.mjs";
import { js_statement_call_single_argument } from "./js_statement_call_single_argument.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_calls_to_each_names(ast) {
  "Every name this tree calls on a line of its own with exactly one argument.";
  "These are the only names a run of side by side calls could ever be built from, so asking the repo about any other one would be asking for nothing. More names come back than are used, which costs a question each and changes no answer.";
  let names = [];
  function statement_name(v) {
    let node = property_get(v, "node");
    let call = js_statement_call_single_argument(node);
    if (null_is(call)) {
      return;
    }
    let name = property_get(call, "name");
    list_add(names, name);
  }
  js_visit_type(ast, "ExpressionStatement", statement_name);
  let unique = list_unique(names);
  return unique;
}
