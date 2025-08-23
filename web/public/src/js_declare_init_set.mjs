import { js_declare_single } from "./js_declare_single.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function js_declare_init_set(vd, init) {
  let declarators = js_declare_single(vd);
  object_property_set(declarators, "init", init);
}
