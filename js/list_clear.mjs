import { property_set } from "./property_set.mjs";
export function list_clear(list) {
  property_set(list, "length", 0);
}
