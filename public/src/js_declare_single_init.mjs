import { js_declare_init_get } from "../../../love/public/src/js_declare_init_get.mjs";
import { js_declare_single } from "../../../love/public/src/js_declare_single.mjs";
export function js_declare_single_init(next) {
  let declarator = js_declare_single(next);
  let init = js_declare_init_get(declarator);
  return init;
}
