import { js_parse_expression } from "./js_parse_expression.mjs";
import { null_is } from "./null_is.mjs";
export function js_parse_expression_null_kept(code_expression) {
  "Written-out code read in as a tree, with nothing left as nothing.";
  "This is for asking a reading about a piece of code and about no piece of code in the same breath. A corpus of cases for any reading that answers rather than stops has to hold both - the code it is asked about, and the nothing it is also asked about - and nothing cannot be written down as code, because every word is legal code and would be asked about as one.";
  "Reading in is left to fail loudly on code that will not read, since a corpus holding unreadable code is a mistake in the corpus and should say so rather than quietly become one more nothing.";
  let absent = null_is(code_expression);
  if (absent) {
    return code_expression;
  }
  let expression = js_parse_expression(code_expression);
  return expression;
}
