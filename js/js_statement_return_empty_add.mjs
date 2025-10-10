import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_statement_return_empty } from "../../../love/public/src/js_statement_return_empty.mjs";
export function js_statement_return_empty_add(body_block) {
  let r = js_statement_return_empty();
  list_add(body_block, r);
}
