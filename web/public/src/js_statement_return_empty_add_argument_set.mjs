import { js_return_argument_set } from "../../../love/public/src/js_return_argument_set.mjs";
import { js_statement_return_empty_add } from "../../../love/public/src/js_statement_return_empty_add.mjs";
export function js_statement_return_empty_add_argument_set(body_block, e) {
  let r = js_statement_return_empty_add(body_block);
  js_return_argument_set(r, e);
}
