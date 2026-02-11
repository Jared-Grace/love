import { js_parse_expression_from_assignment } from "../../../love/public/src/js_parse_expression_from_assignment.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function js_object_to_expression(object) {
  let json = json_to(object);
  let init = js_parse_expression_from_assignment(json);
  return init;
}
