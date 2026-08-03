import { arguments_assert } from "./arguments_assert.mjs";
import { list_first_try } from "./list_first_try.mjs";
import { null_is } from "./null_is.mjs";
import { js_statement_call_any_get } from "./js_statement_call_any_get.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
export function js_function_arguments_assert_first_is(statements) {
  arguments_assert(arguments, 1);
  ("Whether the first line of a body is already the one counting the function's arguments.");
  ("Asked on its own so that adding the line and asking whether it is there are one word apart, and so an empty body answers no rather than throwing on a line that is not there.");
  let first = list_first_try(statements);
  let missing = null_is(first);
  if (missing) {
    return false;
  }
  let call = js_statement_call_any_get(first);
  let call_missing = null_is(call);
  if (call_missing) {
    return false;
  }
  let callee = property_get(call, "callee");
  let called = js_identifier_name_try(callee);
  let right = fn_name("arguments_assert");
  let already = equal(called, right);
  return already;
}
