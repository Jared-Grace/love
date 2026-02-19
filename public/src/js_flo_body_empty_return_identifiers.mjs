import { js_flo_body_empty_return } from "../../../love/public/src/js_flo_body_empty_return.mjs";
import { js_expression_array_identifiers } from "../../../love/public/src/js_expression_array_identifiers.mjs";
export function js_flo_body_empty_return_identifiers(ast, names) {
  let expression = js_expression_array_identifiers(names);
  js_flo_body_empty_return(ast, expression);
}
