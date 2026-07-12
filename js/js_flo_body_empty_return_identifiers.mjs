import { js_flo_body_empty_return } from "./js_flo_body_empty_return.mjs";
import { js_expression_array_identifiers } from "./js_expression_array_identifiers.mjs";
export function js_flo_body_empty_return_identifiers(ast, names) {
  let expression = js_expression_array_identifiers(names);
  js_flo_body_empty_return(ast, expression);
}
