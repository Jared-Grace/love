import { arguments_assert } from "./arguments_assert.mjs";
import { list_insert } from "./list_insert.mjs";
import { js_statement_return_argument } from "./js_statement_return_argument.mjs";
export function js_statement_return_insert(list, index, argument) {
  arguments_assert(arguments, 3);
  let r = js_statement_return_argument(argument);
  list_insert(list, index, r);
}
