import { js_statement_arguments_assert_is } from "./js_statement_arguments_assert_is.mjs";
import { not } from "./not.mjs";
export function js_statement_arguments_assert_not_is(statement) {
  "Whether this one line is anything other than the one counting the function's arguments.";
  "The question next door asked the other way round, so that a reading keeping everything but that line can be written as one filter rather than as a lambda at each place that wants it.";
  let guard_is = js_statement_arguments_assert_is(statement);
  let other_is = not(guard_is);
  return other_is;
}
