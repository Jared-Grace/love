import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_visit_declarators(ast, lambda2) {
  js_visit_type(ast, "VariableDeclarator", lambda2);
}
