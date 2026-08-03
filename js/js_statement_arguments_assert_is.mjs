import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_call_any_get } from "./js_statement_call_any_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
export function js_statement_arguments_assert_is(statement) {
  arguments_assert(arguments, 1);
  ("Whether this one line is the one counting the function's arguments.");
  ("Asked of a statement rather than of a body, because the line is not always the first one written. A body that opens with prose carries it second or third, and a reading that only ever looked at the opening line called that line work.");
  let call = js_statement_call_any_get(statement);
  let missing = null_is(call);
  if (missing) {
    return false;
  }
  let callee = property_get(call, "callee");
  let called = js_identifier_name_try(callee);
  let right = fn_name("arguments_assert");
  let guard_is = equal(called, right);
  return guard_is;
}
