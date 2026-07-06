import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { js_expand_generic } from "../../../love/public/src/js_expand_generic.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function functions_expand_all(f_name) {
  let result = await data_identifiers_search(f_name);
  async function lambda(ast) {
    function lambda3() {}
    let result2 = js_visit_calls_named(ast2, f_name2, lambda3);
    let inserted = await js_expand_generic(next, stack2, index, ast);
  }
  let output = await function_transform(f_name, lambda);
}
