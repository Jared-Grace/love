import { each } from "./each.mjs";
import { list_remove_property } from "./list_remove_property.mjs";
export function list_remove_property_multiple(list, property_name, removals) {
  function lambda(r) {
    list_remove_property(list, property_name, r);
  }
  each(removals, lambda);
}
