import { list_adder_single } from "./list_adder_single.mjs";
import { js_visit_returns } from "./js_visit_returns.mjs";
import { property_get } from "./property_get.mjs";
export function js_find_return(ast) {
  "A selector hands back the node itself, the same as every other selector, so a";
  "transform can take what any of them returns without asking which one found it.";
  "Where the node sits is recoverable from the tree by whoever needs it, so";
  "carrying that along would only make the answers differ in shape.";
  function lambda(la) {
    js_visit_returns(ast, la);
  }
  let only = list_adder_single(lambda);
  let node = property_get(only, "node");
  return node;
}
