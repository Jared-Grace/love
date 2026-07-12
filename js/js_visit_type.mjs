import { js_visit_types } from "./js_visit_types.mjs";
export function js_visit_type(ast, type, lambda$v) {
  js_visit_types(ast, [type], lambda$v);
}
