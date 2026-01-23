import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_object_to_values_list(ast) {
  marker("1");
  function lambda(v) {}
  js_visit_type(ast, "ObjectExpression", lambda);
}
