import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_visit_identifiers(ast, lambda) {
  js_visit_type(ast, "Identifier", lambda);
}
