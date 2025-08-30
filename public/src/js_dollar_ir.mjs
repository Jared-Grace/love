import { object_property_get } from "./object_property_get.mjs";
import { js_dollar_i } from "./js_dollar_i.mjs";
import { marker } from "./marker.mjs";
export function js_dollar_ir({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  marker("1");
  js_dollar_i({
    stack1,
  });
  let consequent = object_property_get(stack1, "consequent");
  return;
}
