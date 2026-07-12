import { list_remove } from "./list_remove.mjs";
import { list_find_property } from "./list_find_property.mjs";
export function list_remove_property(languages, property_name, en) {
  let found = list_find_property(languages, property_name, en);
  list_remove(languages, found);
}
