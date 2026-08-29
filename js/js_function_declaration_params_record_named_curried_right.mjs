import { js_function_declaration_params_record_named } from "./js_function_declaration_params_record_named.mjs";
export function js_function_declaration_params_record_named_curried_right(
  chosen,
) {
  let r2 =
    function js_function_declaration_params_record_named_curried_right_result(
      ast,
    ) {
      let r = js_function_declaration_params_record_named(ast, chosen);
      return r;
    };
  return r2;
}
