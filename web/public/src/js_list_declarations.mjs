import { js_visit_declarations } from "../../../love/public/src/js_visit_declarations.mjs";
export function js_list_declarations(ast, lambda$v) {
  let r = js_visit_declarations(ast, lambda$v);
  return r;
}
