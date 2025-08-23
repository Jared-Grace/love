import { js_property_generic } from "./js_property_generic.mjs";
export function js_property(key, value) {
  const shorthand = false;
  let p = js_property_generic(shorthand, key, value);
  return p;
}
