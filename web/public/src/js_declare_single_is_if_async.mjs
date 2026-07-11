import { js_declare_is_if_async } from "../../../love/public/src/js_declare_is_if_async.mjs";
import { list_single_if_async } from "../../../love/public/src/list_single_if_async.mjs";
import { js_declaration_declarators_get } from "../../../love/public/src/js_declaration_declarators_get.mjs";
export async function js_declare_single_is_if_async(previous, lambda) {
  async function lambda3() {
    let declarations = js_declaration_declarators_get(previous);
    await list_single_if_async(declarations, lambda);
  }
  await js_declare_is_if_async(previous, lambda3);
}
