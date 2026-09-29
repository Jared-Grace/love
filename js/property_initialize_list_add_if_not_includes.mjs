import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
export function property_initialize_list_add_if_not_includes(
  list,
  property_name,
  item,
) {
  let names = property_initialize_list(list, property_name);
  list_add_if_not_includes(names, item);
}
