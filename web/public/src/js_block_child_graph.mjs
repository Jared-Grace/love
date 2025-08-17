import { list_adder } from "./list_adder.mjs";
import { log } from "./log.mjs";
import { js_stack_last } from "./js_stack_last.mjs";
import { each } from "./each.mjs";
import { js_visitors } from "./js_visitors.mjs";
import { marker } from "./marker.mjs";
export function js_block_child_graph(ast) {
  marker("1");
  let list2 = list_adder(function lambda2(la) {});
  function lambda(v) {
    let { node, stack } = v;
    let last = js_stack_last(stack, "BlockStatement");
    log({
      last,
    });
  }
  let list = js_visitors(ast);
  each(list, lambda);
}
