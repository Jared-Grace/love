import { each } from "../../../love/public/src/each.mjs";
import { list_remove_property } from "../../../love/public/src/list_remove_property.mjs";
export function list_remove_property_multiple(
  languages,
  property_name,
  removals,
) {
  function lambda10(r) {
    list_remove_property(languages, property_name, r);
  }
  each(removals, lambda10);
}
