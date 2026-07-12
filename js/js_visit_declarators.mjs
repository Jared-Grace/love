import { js_visit_type } from "./js_visit_type.mjs";
export function js_visit_declarators(ast, lambda) {
  js_visit_type(ast, "VariableDeclarator", lambda);
}
