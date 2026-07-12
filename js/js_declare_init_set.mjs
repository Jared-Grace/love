import { js_declarator_init_set } from "./js_declarator_init_set.mjs";
import { js_declare_single } from "./js_declare_single.mjs";
export function js_declare_init_set(vd, init) {
  let declarator = js_declare_single(vd);
  js_declarator_init_set(declarator, init);
}
