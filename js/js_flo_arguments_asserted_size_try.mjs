import { arguments_assert } from "./arguments_assert.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_statement_expression_get } from "./js_statement_expression_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_second } from "./list_second.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function js_flo_arguments_asserted_size_try(ast) {
  arguments_assert(arguments, 1);
  ("How many things this function's own argument check says it takes, or nothing at all when it makes no such check.");
  ("A function here declares its argument count twice - once as its parameters, and once as the check at the top of its body - and the two are written at different moments by different hands. This reads back the second one so the two can be held against each other.");
  ("Only the statements the function itself is made of are looked at. A check written inside a lambda further in belongs to that lambda and counts its arguments, not this one's, and reading it here would blame a function for a number that was never about it.");
  ("It says nothing rather than a number in every case it cannot settle: no check at all, a check whose second thing is not written out on the spot, a check handed other than two things. A guess here would be a made-up disagreement, and a disagreement is the whole of what the caller does something about.");
  let body = js_flo_body(ast);
  let size = null;
  function statement_each(statement) {
    let expression_is = js_node_type_is(statement, "ExpressionStatement");
    if (not(expression_is)) {
      return;
    }
    let expression = js_statement_expression_get(statement);
    let name = js_call_callee_name_try(expression);
    let right = fn_name("arguments_assert");
    let counted = equal(name, right);
    let right2 = fn_name("arguments_assert_each");
    let shaped = equal(name, right2);
    let either = counted || shaped;
    if (not(either)) {
      return;
    }
    let args = js_call_arguments_get(expression);
    let left = list_size(args);
    let two = equal(left, 2);
    if (not(two)) {
      return;
    }
    let second = list_second(args);
    if (counted) {
      let written = js_node_type_is(second, "Literal");
      if (not(written)) {
        return;
      }
      size = property_get(second, "value");
      return;
    }
    let listed = js_node_type_is(second, "ArrayExpression");
    if (not(listed)) {
      return;
    }
    let elements = property_get(second, "elements");
    size = list_size(elements);
  }
  each(body, statement_each);
  return size;
}
