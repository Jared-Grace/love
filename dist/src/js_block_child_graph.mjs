import { property_get } from "../../../love/public/src/property_get.mjs";
import { log_unparse_try } from "../../../love/public/src/log_unparse_try.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_stack_last } from "../../../love/public/src/js_stack_last.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_visitors } from "../../../love/public/src/js_visitors.mjs";
export function js_block_child_graph(ast) {
  function lambda2(la) {
    function lambda(v) {
      let stack = property_get(v, "stack");
      let right = property_get(v, "node");
      log_unparse_try(right);
      let left = js_stack_last(stack, "BlockStatement");
      let nn = null_not_is(left);
      if (nn) {
        let body = property_get(left, "body");
        let includes = list_includes(body, right);
        if (includes) {
          la([left, right]);
          return;
        }
      }
    }
    let vs = js_visitors(ast);
    each(vs, lambda);
  }
  let edges = list_adder(lambda2);
  return edges;
}
