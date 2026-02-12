import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
export async function sandbox() {
  async function lambda2(ast) {
    function lambda3() {}
    js_visit_calls_named(ast2, f_name, lambda3);
  }
  let waited = await functions_transform(lambda2);
}
