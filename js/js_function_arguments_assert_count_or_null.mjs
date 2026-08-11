import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_statement_arguments_assert_is } from "./js_statement_arguments_assert_is.mjs";
import { js_statement_call_any_get } from "./js_statement_call_any_get.mjs";
import { list_at } from "./list_at.mjs";
import { null_is } from "./null_is.mjs";
import { each } from "./each.mjs";
export function js_function_arguments_assert_count_or_null(declaration) {
  arguments_assert(arguments, 1);
  ("The number the line at the top of this body says the function takes, and nothing at all when the body has no such line.");
  ("The line is not always the first one written - a body opening with prose carries it second or third - so every line is looked at rather than only the opening one.");
  ("Nothing here compares it to anything. What the number should be is the caller's question, and keeping the reading apart from the judgement is what lets one reader serve both the check and whatever repairs it.");
  let body = property_get(declaration, "body");
  let statements = property_get(body, "body");
  let count = null;
  function statement_read(statement) {
    let guard_is = js_statement_arguments_assert_is(statement);
    if (guard_is) {
      let call = js_statement_call_any_get(statement);
      let args = property_get(call, "arguments");
      let second = list_at(args, 1);
      let missing = null_is(second);
      if (missing) {
        return;
      }
      count = property_get(second, "value");
    }
  }
  each(statements, statement_read);
  return count;
}
