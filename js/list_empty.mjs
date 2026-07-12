import { property_set } from "./property_set.mjs";
export function list_empty(list) {
  property_set(list, "length", 0);
}
