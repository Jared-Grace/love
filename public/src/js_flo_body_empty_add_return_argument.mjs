import { js_flo_body_add_return_argument } from "../../../portfolio_qa/public/src/js_flo_body_add_return_argument.mjs";
import { js_flo_body_empty } from "../../../love/public/src/js_flo_body_empty.mjs";
export function js_flo_body_empty_add_return_argument(ast, e) {
  let body_block = js_flo_body_empty(ast);
  js_flo_body_add_return_argument(ast, e);
}
