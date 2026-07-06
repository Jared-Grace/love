import { property_get } from "../../../love/public/src/property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { js_expand_generic } from "../../../love/public/src/js_expand_generic.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function functions_expand_all(f_name) {
  let result = await data_identifiers_search(f_name);
  async function lambda(ast) {
    function lambda2(la) {
      js_visit_calls_named(ast, f_name, la);
    }
    let list = list_adder(lambda2);
    async function lambda4(item) {
      let v = property_get(item, "v");
      let inserted = await js_expand_generic(next, stack2, index, ast);
    }
    await each_async(list, lambda4);
  }
  let output = await function_transform(f_name, lambda);
}
