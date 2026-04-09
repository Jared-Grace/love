import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
export function js_visit_calls_named_nodes(ast, f_name, lambda) {
  let r = js_visit_calls_named(ast, f_name, () => {});
  return r;
}
