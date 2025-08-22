import { object_property_set } from "./object_property_set.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_stack_last } from "./js_stack_last.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_if_test_replace(replacement) {
  marker("1");
  async function lambda(a) {
    let { stack } = a;
    let last = js_stack_last(stack, "IfStatement");
    let expression = js_parse_expression(replacement);
    object_property_set(last, "test", expression);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}
