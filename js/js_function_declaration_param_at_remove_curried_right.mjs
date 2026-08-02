import { js_function_declaration_param_at_remove } from "./js_function_declaration_param_at_remove.mjs";
export function js_function_declaration_param_at_remove_curried_right(index) {
  let r2 =
    function js_function_declaration_param_at_remove_curried_right_result(ast) {
      let r = js_function_declaration_param_at_remove(ast, index);
      return r;
    };
  return r2;
}
