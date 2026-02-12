import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { functions_asts_each } from "../../../love/public/src/functions_asts_each.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_declaration_single_name } from "../../../love/public/src/js_declaration_single_name.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function functions_search_call(search) {
  async function lambda2(la) {}
  let list = await list_adder_async(lambda2);
  async function lambda(ast) {
    function lambda3(a) {
      let v = property_get(a, "v");
      let node = property_get(v, "node");
      let code = js_unparse(node);
      let f = js_declaration_single_name(ast);
      log({
        f,
        code,
      });
    }
    js_visit_calls_named(ast, search, lambda3);
  }
  await functions_asts_each(lambda);
}
