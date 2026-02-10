import { property_set } from "../../../love/public/src/property_set.mjs";
export function list_empty(list) {
  property_set(list, "length", 0);
}
