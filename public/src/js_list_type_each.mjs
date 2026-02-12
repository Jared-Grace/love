import { each } from "../../../love/public/src/each.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
export function js_list_type_each(ast, type, lambda2) {
  let list = js_list_type(ast, type);
  each(list, lambda2);
}
