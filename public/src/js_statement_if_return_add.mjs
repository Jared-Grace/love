import { js_statement_return_empty_add } from "../../../love/public/src/js_statement_return_empty_add.mjs";
import { js_block_body_get } from "../../../love/public/src/js_block_body_get.mjs";
import { js_statement_if_consequent_get } from "../../../love/public/src/js_statement_if_consequent_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function js_statement_if_return_add(ast, selects) {
  let statement_if = list_first(selects);
  let c = js_statement_if_consequent_get(statement_if);
  let value = js_block_body_get(c);
  let r = js_statement_return_empty_add(value);
}
