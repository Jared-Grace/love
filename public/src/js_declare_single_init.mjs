import {object_property_get} from "./object_property_get.mjs";
import {js_declare_single} from "./js_declare_single.mjs";
export function js_declare_single_init(next) {
  let declarator = js_declare_single(next);
  let oe = object_property_get(declarator, "init");
  return oe;
}
