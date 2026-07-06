import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_list_calls_named } from "../../../love/public/src/js_list_calls_named.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_expand_generic } from "../../../love/public/src/js_expand_generic.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function functions_expand_all(f_name) {
  let result = await data_identifiers_search(f_name);
  let properties = properties_get(result);
  async function lambda2(item2) {
    async function lambda(ast) {
      let list = js_list_calls_named(ast, f_name);
      log(functions_expand_all.name, {
        list,
      });
      async function lambda4(item) {
        let v = property_get(item, "v");
        let stack = property_get(v, "stack");
        log(functions_expand_all.name, {
          v,
        });
        return;
        let inserted = await js_expand_generic(next, stack2, ast);
      }
      await each_async(list, lambda4);
    }
    let output = await function_transform(f_name, lambda);
  }
  await each_async(properties, lambda2);
}
