import { js_declare_single } from "../../../love/public/src/js_declare_single.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export function js_declare_init_set(vd, init) {
  let declarators = js_declare_single(vd);
  property_set(declarators, "init", init);
}
