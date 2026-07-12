import { js_statement_return_add } from "./js_statement_return_add.mjs";
import { js_flo_body_empty } from "./js_flo_body_empty.mjs";
export function js_flo_body_empty_return(ast, expression) {
  let body_block = js_flo_body_empty(ast);
  js_statement_return_add(body_block, expression);
}
