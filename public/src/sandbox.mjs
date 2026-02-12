import { js_declaration_single_name } from "../../../love/public/src/js_declaration_single_name.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
import { ternary } from "./ternary.mjs";
export async function sandbox() {
  async function lambda2(ast) {
    function lambda3() {
      let name2 = js_declaration_single_name(ast2);
    }
    js_visit_calls_named(ast, ternary.name, lambda3);
  }
  let waited = await functions_transform(lambda2);
}
