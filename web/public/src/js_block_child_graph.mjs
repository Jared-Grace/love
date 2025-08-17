import { exit } from "./exit.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_get } from "./list_get.mjs";
import { assert } from "./assert.mjs";
import { list_index_is } from "./list_index_is.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_includes } from "./list_includes.mjs";
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
      let { node: right, stack } = v;
      let left = js_stack_last(stack, "BlockStatement");
      let nn = null_not_is(left);
      if (nn) {
        let index = list_index_of(stack, left);
        let index_2 = index + 2;
        let ii = list_index_is(stack, index_2);
        log(ii);
        assert(ii);
        let item = list_get(stack, index_2);
        exit();
        let ne = equal_not(item, right);
        if (ne) {
          left = item;
          la([left, right]);
          return;
        }
        let { body } = left;
        let includes = list_includes(body, right);
        if (includes) {
          la([left, right]);
        }
      }
    }
    let vs = js_visitors(ast);
    each(vs, lambda);
  }
  let edges = list_adder(lambda2);
  return edges;
}
