import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_visit_declarations(ast, lambda$v) {
  js_visit_type(ast, "VariableDeclaration", lambda$v);
}
