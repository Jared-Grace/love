import { js_expression_statement_is } from "./js_expression_statement_is.mjs";
import { not } from "./not.mjs";
import { js_statement_expression_get } from "./js_statement_expression_get.mjs";
import { js_await_if_unwrap } from "./js_await_if_unwrap.mjs";
import { property_get } from "./property_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { null_is } from "./null_is.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_first } from "./list_first.mjs";
export function js_statement_call_single_argument(statement) {
  "The one call this statement amounts to when the whole statement is a call to a plain name given exactly one argument, as that name, that argument, and whether the call is waited for. Nothing, when the statement is anything else.";
  "Several of these standing side by side, all naming the same function, are what a single walk over a list of their arguments can take the place of.";
  "A call reached through a property is left out, because there is no plain name to hand to the walk.";
  "The statement itself is handed back along with its parts, so a caller gathering these can put one back where it stood when the gathering comes to nothing.";
  let statement_is = js_expression_statement_is(statement);
  if (not(statement_is)) {
    return null;
  }
  let expression = js_statement_expression_get(statement);
  let unwrapped = js_await_if_unwrap(expression);
  let call = property_get(unwrapped, "argument");
  let name = js_call_callee_name_try(call);
  if (null_is(name)) {
    return null;
  }
  let args = js_call_arguments_get(call);
  let size = list_size(args);
  if (equal_not(size, 1)) {
    return null;
  }
  let argument = list_first(args);
  let waited_is = property_get(unwrapped, "async_is");
  let r = {
    name,
    argument,
    waited_is,
    statement,
  };
  return r;
}
