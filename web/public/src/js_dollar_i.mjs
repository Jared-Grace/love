import { js_statement_if } from "../../../love/public/src/js_statement_if.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
export function js_dollar_i({ stack1 }) {
  let from = js_statement_if();
  object_replace(stack1, from);
}
