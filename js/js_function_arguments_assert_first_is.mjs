import { js_statement_arguments_assert_is } from "./js_statement_arguments_assert_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first_try } from "./list_first_try.mjs";
import { null_is } from "./null_is.mjs";
export function js_function_arguments_assert_first_is(statements) {
  arguments_assert(arguments, 1);
  ("Whether the first line of a body is already the one counting the function's arguments.");
  ("Asked on its own so that adding the line and asking whether it is there are one word apart, and so an empty body answers no rather than throwing on a line that is not there.");
  let first = list_first_try(statements);
  let missing = null_is(first);
  if (missing) {
    return false;
  }
  let already = js_statement_arguments_assert_is(first);
  return already;
}
