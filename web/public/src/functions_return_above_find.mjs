import { js_visit_returns_identifiers } from "../../../love/public/src/js_visit_returns_identifiers.mjs";
import { functions_names_each } from "../../../love/public/src/functions_names_each.mjs";
export async function functions_return_above_find() {
  async function lambda2(f_name) {
    js_visit_returns_identifiers(ast, lambda2);
  }
  await functions_names_each(lambda2);
}
