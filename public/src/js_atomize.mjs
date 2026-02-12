import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
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
    let v2 = await lambda_each(v, 0);
    v2;
  }
  let v3 = await each_async(ces, lambda);
  v3;
  let aes = js_list_type(ast, "AwaitExpression");
  async function lambda_each(v, offset) {
    let stack = property_get(v, "stack");
    let stack1 = list_get_end(stack, 1 + offset);
    if (list_is(stack1)) {
      ("this list could be a block body or an argument list of a fn call");
      let variable_name = js_node_atomize_name();
      let v4 = await js_node_atomize(existing_ids, v, variable_name, offset);
      v4;
    }
  }
  async function lambda2(v) {
    let v5 = await lambda_each(v, 1);
    v5;
  }
  let v6 = await each_async(aes, lambda2);
  return;
  log({
    aes,
  });
  let stack1 = list_get_end(stack, 1);
}
