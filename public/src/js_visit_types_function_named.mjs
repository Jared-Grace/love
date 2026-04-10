import { js_visit_types_function } from "../../../love/public/src/js_visit_types_function.mjs";
export function js_visit_types_function_named(ast, lambda$v) {
  function lambda() {}
  let r = js_visit_types_function(ast, lambda);
  return r;
}
