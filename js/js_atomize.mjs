import { list_get_end_2 } from "./list_get_end_2.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { property_get } from "./property_get.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_node_atomize } from "./js_node_atomize.mjs";
import { each_async } from "./each_async.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { list_is } from "./list_is.mjs";
import { js_node_atomize_name } from "./js_node_atomize_name.mjs";
export async function js_atomize(ast) {
  let ces = js_list_type(ast, "CallExpression");
  async function lambda(v) {
    let stack = property_get(v, "stack");
    let offset = 0;
    let stack_1 = list_get_end_1(stack);
    let list_possible = stack_1;
    function lambda3() {
      offset = 1;
      list_possible = list_get_end_2(stack);
    }
    js_node_type_is_if(stack_1, "AwaitExpression", lambda3);
    if (list_is(list_possible)) {
      ("this list could be a block body or an argument list of a fn call or an array");
      let variable_name = js_node_atomize_name();
      await js_node_atomize(ast, v, variable_name, offset);
    }
    return;
  }
  await each_async(ces, lambda);
}
