import { catch_null } from "./catch_null.mjs";
import { js_parse_expression_from_statement } from "./js_parse_expression_from_statement.mjs";
import { js_parse_expression_try } from "./js_parse_expression_try.mjs";
import { null_is } from "./null_is.mjs";
export function js_code_expression_try(code) {
  "The one value a line stands for, read from the line however it was written down - 1 + 2 on its own, and 1 + 2; with the semicolon a printer puts back on the end, both give the same answer. Nothing at all if the line stands for no value, and nothing rather than a throw, so a caller may ask of text it has not vouched for.";
  "Both ways of asking are needed because a line makes this round trip constantly. It arrives written as a value, is read into a tree, is printed back out, and comes back with a semicolon and a new line after it - and the second reading then failed where the first had not. Whoever asks does not care which of the two shapes they are holding; they want the value either way.";
  let expression = js_parse_expression_try(code);
  let missing = null_is(expression);
  if (missing) {
    function run() {
      let from_statement = js_parse_expression_from_statement(code);
      return from_statement;
    }
    let second = catch_null(run);
    return second;
  }
  return expression;
}
