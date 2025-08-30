import { list_add } from "./list_add.mjs";
import { js_statement_return_empty } from "./js_statement_return_empty.mjs";
export function js_statement_return_empty_add(body_block) {
  let r = js_statement_return_empty();
  list_add(body_block, r);
}
