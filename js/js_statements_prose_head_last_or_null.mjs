import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_string_is } from "./js_statement_string_is.mjs";
import { js_statement_arguments_assert_is } from "./js_statement_arguments_assert_is.mjs";
export function js_statements_prose_head_last_or_null(statements) {
  "The last line a function says about itself before it does anything, and nothing at all when it says nothing before it does anything.";
  "WHAT COUNTS AS NOT HAVING STARTED YET IS TWO THINGS, not one. A line the function says about itself, and the count of its arguments - which is a check rather than work, and which some functions write above their account and others below it. Everything else stops the walk where it stands.";
  "STOPPING AT THE FIRST REAL STATEMENT IS THE POINT OF ASKING IT THIS WAY. A function may say more about itself further down, beside the part being explained, and the last of those is not where a new line about the whole function belongs.";
  arguments_assert(arguments, 1);
  let said = null;
  for (let statement of statements) {
    let string_is = js_statement_string_is(statement);
    if (string_is) {
      said = statement;
      continue;
    }
    let assert_is = js_statement_arguments_assert_is(statement);
    if (assert_is) {
      continue;
    }
    break;
  }
  return said;
}
