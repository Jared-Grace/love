import { exit } from "../../../love/public/src/exit.mjs";
import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { data_identifiers_search_names } from "../../../love/public/src/data_identifiers_search_names.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_list_calls_named } from "../../../love/public/src/js_list_calls_named.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_expand_generic } from "../../../love/public/src/js_expand_generic.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function functions_expand_all(f_name_expand) {
  let f_names = await data_identifiers_search_names(f_name_expand);
  async function lambda2(f_name) {
    async function lambda(ast) {
      let list = js_list_calls_named(ast, f_name_expand);
      async function lambda4(call) {
        let v = property_get(call, "v");
        let stack = property_get(v, "stack");
        let r = js_block_find(stack);
        let body = property_get(r, "body");
        let item = property_get(r, "item");
        log(functions_expand_all.name, {
          f_name,
        });
        let inserted = await js_expand_generic(item, body, ast);
        exit();
        return;
      }
      await each_async(list, lambda4);
    }
    let output = await function_transform(f_name, lambda);
  }
  await each_async(f_names, lambda2);
}
