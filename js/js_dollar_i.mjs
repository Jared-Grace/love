import { js_statement_if } from "./js_statement_if.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_dollar_i({ stack_1 }) {
  let from = js_statement_if();
  object_replace(stack_1, from);
}
