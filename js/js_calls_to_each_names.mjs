import { list_includes } from "./list_includes.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_statement_call_single_argument } from "./js_statement_call_single_argument.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_calls_to_each_names(ast) {
  "Every name this tree calls on a line of its own with exactly one argument, more than once.";
  "These are the only names a run of side by side calls could ever be built from, so asking the repo about any other one would be asking for nothing. A run is two or more such lines standing together on one name, so a name called this way only once in the whole tree cannot be in one, whatever else is true of it.";
  "Each name that comes back costs a reading of the repo - the file that answers to it found, read and parsed - and that reading is the whole cost of this step over a sweep of every function. Asking about the names called once as well was most of the list and changed no answer.";
  let names = [];
  let again = [];
  function statement_name(v) {
    let node = property_get(v, "node");
    let call = js_statement_call_single_argument(node);
    if (null_is(call)) {
      return;
    }
    let name = property_get(call, "name");
    let seen_is = list_includes(names, name);
    if (seen_is) {
      list_add(again, name);
    }
    list_add(names, name);
  }
  js_visit_type(ast, "ExpressionStatement", statement_name);
  let unique = list_unique(again);
  return unique;
}
