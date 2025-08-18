import { log_json } from "./log_json.mjs";
import { log_unparse } from "./log_unparse.mjs";
import { js_atomize } from "./js_atomize.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { js_node_types_is } from "./js_node_types_is.mjs";
import { js_types_function } from "./js_types_function.mjs";
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
import { json_to } from "./json_to.mjs";
export function js_block_child_graph(ast) {
  marker("1");
  function lambda2(la) {
    function lambda(v) {
      let { node: right, stack } = v;
      log_json(right);
      let match = js_node_types_is(right, ["ImportSpecifier", "Identifier"]);
      if (match) {
        log_unparse(right);
      }
      let left = js_stack_last(stack, "BlockStatement");
      let nn = null_not_is(left);
      if (nn) {
        let { body } = left;
        let includes = list_includes(body, right);
        if (includes) {
          la([left, right]);
          return;
        }
        if (false) {
          "this was written for deeper block statements; " +
            js_atomize.name +
            " negates need";
          function lambda4() {
            let index = list_index_of(stack, left);
            let index_2 = index + 2;
            let ii = list_index_is(stack, index_2);
            if (ii) {
              let item = list_get(stack, index_2);
              let ne = equal_not(item, right);
              if (ne) {
                left = item;
                la([left, right]);
                return;
              }
            }
          }
          js_node_type_is_if(right, "BlockStatement", lambda4);
        }
      }
    }
    let vs = js_visitors(ast);
    each(vs, lambda);
  }
  let edges = list_adder(lambda2);
  return edges;
}
