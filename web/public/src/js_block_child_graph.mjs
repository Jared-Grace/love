import { list_is } from "./list_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_adder } from "./list_adder.mjs";
import { log } from "./log.mjs";
import { js_stack_last } from "./js_stack_last.mjs";
import { each } from "./each.mjs";
import { js_visitors } from "./js_visitors.mjs";
import { marker } from "./marker.mjs";
export function js_block_child_graph(ast) {
  marker("1");
  function lambda2(la) {
    function lambda(v) {
      let { node, stack } = v;
      let last = js_stack_last(stack, "BlockStatement");
      let l = list_is(value);
      if (last) {
      }
      la([last, node]);
    }
    let vs = js_visitors(ast);
    each(vs, lambda);
  }
  let edges = list_adder(lambda2);
  return edges;
}
