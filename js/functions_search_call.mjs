import { property_path_get_2 } from "./property_path_get_2.mjs";
import { lookup_adder_async } from "./lookup_adder_async.mjs";
import { functions_asts_each } from "./functions_asts_each.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function functions_search_call(search) {
  async function lambda2(la) {
    async function lambda(ast) {
      function lambda3(a) {
        let node = property_path_get_2(a, "v", "node");
        let code = js_unparse(node);
        let f = js_flo_name(ast);
        la(f, code);
      }
      js_visit_calls_named(ast, search, lambda3);
    }
    await functions_asts_each(lambda);
  }
  let list = await lookup_adder_async(lambda2);
  return list;
}
