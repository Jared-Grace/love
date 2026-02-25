import { function_parse } from "../../../love/public/src/function_parse.mjs";
import { js_visit_returns_identifiers } from "../../../love/public/src/js_visit_returns_identifiers.mjs";
import { functions_names_each } from "../../../love/public/src/functions_names_each.mjs";
export async function functions_return_above_find() {
  async function lambda2(f_name) {
    let parsed = await function_parse(f_name2);
    js_visit_returns_identifiers(ast, lambda2);
  }
  await functions_names_each(lambda2);
}
