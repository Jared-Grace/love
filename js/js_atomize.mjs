import { list_get_end_2 } from "./list_get_end_2.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { property_get } from "./property_get.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_node_atomize } from "./js_node_atomize.mjs";
import { each_async } from "./each_async.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { list_is } from "./list_is.mjs";
import { js_node_atomize_name } from "./js_node_atomize_name.mjs";
import { js_stack_list_sequence_is } from "./js_stack_list_sequence_is.mjs";
export async function js_atomize(ast) {
  let ces = js_list_type(ast, "CallExpression");
  async function lambda(v) {
    let stack = property_get(v, "stack");
    let offset = 0;
    let index_end = 1;
    let stack_ = list_get_end_1(stack);
    let list_possible = stack_;
    function lambda3() {
      offset = 1;
      index_end = 2;
      list_possible = list_get_end_2(stack);
    }
    js_node_type_is_if(stack_, "AwaitExpression", lambda3);
    if (list_is(list_possible)) {
      ("this list could be a block body or an argument list of a fn call or an array");
      let sequence_is = js_stack_list_sequence_is(stack, index_end);
      if (sequence_is) {
        ("the pieces of a comma-joined expression, which is how a comment naming a function is written - there is no statement list here to lift a local into, and leaving the call where it stands changes nothing about what runs");
        return;
      }
      let asked_again = js_stack_loop_condition_is(stack);
      if (asked_again) {
        ("a loop header, which is asked again every time round. the name would go in the block above the loop, so the answer would be taken once and kept for the whole loop - and a loop over a list its own body shortens then runs a different number of times. this is the one place where lifting a piece out is not the same code");
        return;
      }
      let variable_name = js_node_atomize_name();
      await js_node_atomize(ast, v, variable_name, offset);
    }
    return;
  }
  await each_async(ces, lambda);
}
