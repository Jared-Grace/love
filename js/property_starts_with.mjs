import { text_starts_with } from "./text_starts_with.mjs";
import { property_get } from "./property_get.mjs";
export function property_starts_with(item, property_name, prefix) {
  let value = property_get(item, property_name);
  let sw = text_starts_with(value, prefix);
  return sw;
}
