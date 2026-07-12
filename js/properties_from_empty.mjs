import { properties_from } from "./properties_from.mjs";
export function properties_from_empty(o, properties) {
  let r = properties_from({}, properties, o);
  return r;
}
