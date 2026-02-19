import { js_statement_return_empty_add_argument_set } from "../../../love/public/src/js_statement_return_empty_add_argument_set.mjs";
import { js_flo_block_body_empty } from "../../../love/public/src/js_flo_block_body_empty.mjs";
export function js_function_declaration_single_block_body_empty_return(
  ast,
  expression,
) {
  let body_block = js_flo_block_body_empty(ast);
  js_statement_return_empty_add_argument_set(body_block, expression);
}
