import {list_adder} from "./list_adder.mjs";
import {js_visit} from "./js_visit.mjs";
import {js_stack_list_block_is} from "./js_stack_list_block_is.mjs";
import {list_remove} from "./list_remove.mjs";
export function marker_down_choices_lambda({stack2, stack1, ast}) {
  list_remove(stack2, stack1);
  function lambda3(la) {
    function lambda2(v) {
      let {stack} = v;
      if (js_stack_list_block_is(stack, 1) || js_stack_list_block_is(stack, 0)) {
        la(v);
      }
    }
    js_visit(ast, lambda2);
  }
  let vs = list_adder(lambda3);
  return vs;
}
