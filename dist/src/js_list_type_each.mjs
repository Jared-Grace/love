import { each } from "../../../love/public/src/each.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
export function js_list_type_each(ast, type, lambda2) {
  let vs = js_list_type(ast, type);
  each(vs, lambda2);
}
