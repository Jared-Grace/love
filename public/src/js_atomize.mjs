import { noop } from "../../../love/public/src/noop.mjs";
import { list_get_end_2 } from "../../../love/public/src/list_get_end_2.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { js_node_atomize } from "../../../love/public/src/js_node_atomize.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
import { js_node_atomize_name } from "../../../love/public/src/js_node_atomize_name.mjs";
export async function js_atomize(ast) {
  let existing_ids = js_identifiers_names(ast);
  let ces = js_list_type(ast, "CallExpression");
  async function lambda(v) {
    let stack = property_get(v, "stack");
    let offset = 0;
    const stack1 = list_get_end_1(stack);
    let list_possible = stack1;
    function lambda3() {
      offset = 1;
      list_possible = list_get_end_2(stack);
    }
    js_node_type_is_if(stack1, "AwaitExpression", lambda3);
    if (list_is(list_possible)) {
      ("this list could be a block body or an argument list of a fn call");
      let variable_name = js_node_atomize_name();
      await js_node_atomize(existing_ids, v, variable_name, offset);
    }
    return;
    let v2 = noop();
    let v3 = noop();
    [v2, v3];
  }
  await each_async(ces, lambda);
}
