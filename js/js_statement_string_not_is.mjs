import { not } from "./not.mjs";
import { js_statement_string_is } from "./js_statement_string_is.mjs";
export function js_statement_string_not_is(statement) {
  "The opposite reading, so a body can be filtered down to the statements that actually do something.";
  let string_is = js_statement_string_is(statement);
  let n = not(string_is);
  return n;
}
