import { js_stack_last } from "./js_stack_last.mjs";
import { each } from "./each.mjs";
import { js_visitors } from "./js_visitors.mjs";
import { marker } from "./marker.mjs";
export function js_block_child_graph(ast) {
  marker("1");
  function lambda(v) {
    let { node, stack } = v;
    let last = js_stack_last(stack, "BlockStatement");
  }
  let list = js_visitors(ast);
  each(list, lambda);
}
