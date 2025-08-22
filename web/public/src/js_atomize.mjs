import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_node_atomize } from "./js_node_atomize.mjs";
import { each_async } from "./each_async.mjs";
import { js_type } from "./js_type.mjs";
import { list_is } from "./list_is.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
export async function js_atomize(ast) {
  let existing = js_identifiers_names(ast);
  let ces = js_type(ast, "CallExpression");
  async function lambda(v) {
    let { stack } = v;
    const stack1 = list_get_end_1(stack);
    if (list_is(stack1)) {
      await js_node_atomize(existing, v);
    }
  }
  await each_async(ces, lambda);
}
