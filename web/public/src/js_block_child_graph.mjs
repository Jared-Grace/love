import { each } from "./each.mjs";
import { js_visitors } from "./js_visitors.mjs";
import { marker } from "./marker.mjs";
export function js_block_child_graph(ast) {
  marker("1");
  let list = js_visitors(ast);
  each(list2, function lambda(item) {});
}
