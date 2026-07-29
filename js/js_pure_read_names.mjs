import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_operator_function_names } from "./js_operator_function_names.mjs";
import { js_pure_expression_types } from "./js_pure_expression_types.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_pure_read_names(node) {
  arguments_assert(arguments, 1);
  ("The names this expression reads, when the whole of it is made of parts that only");
  ("read - and nothing at all when any part of it might do more than read");
  ("Nothing rather than an empty list is the answer for an expression that is not all");
  ("reading, because the two mean opposite things: an empty list says this expression");
  ("reads no name and so can never change its answer, and that is exactly the claim");
  ("that must not be made about an expression nobody has proved anything about.");
  ("Reading-only means the value the expression gives back is settled entirely by the");
  ("names it mentions. Standing still is what allows that to be concluded: a call is");
  ("allowed only when it is one of the calls this repo writes for its operators, which");
  ("do arithmetic on what they are handed and nothing else, and a reach through a dot");
  ("is not allowed at all, because the word after the dot can be a hidden question");
  ("with an answer of its own.");
  ("A name being called is not a name being read for its value - the word standing in");
  ("front of the bracket picks the operator and is the same every time round, so");
  ("offering it would say the expression depends on something it does not.");
  let allowed = js_pure_expression_types();
  let operators = js_operator_function_names();
  let callees = [];
  function called(v) {
    let call = property_get(v, "node");
    let callee = property_get(call, "callee");
    list_add(callees, callee);
  }
  js_visit_types(node, ["CallExpression"], called);
  let names = [];
  let pure = true;
  function lambda(v) {
    let visited = property_get(v, "node");
    let type = js_node_type(visited);
    let known_is = list_includes(allowed, type);
    if (not(known_is)) {
      pure = false;
      return;
    }
    let call_is = equal(type, "CallExpression");
    if (call_is) {
      let callee = property_get(visited, "callee");
      let word = property_get_or_null(callee, "name");
      let operator_is = list_includes(operators, word);
      if (not(operator_is)) {
        pure = false;
      }
      return;
    }
    let named_is = equal(type, "Identifier");
    if (not(named_is)) {
      return;
    }
    let picks_operator = list_includes(callees, visited);
    if (picks_operator) {
      return;
    }
    let name = property_get(visited, "name");
    list_add(names, name);
  }
  js_visit(node, lambda);
  if (not(pure)) {
    return null;
  }
  return names;
}
