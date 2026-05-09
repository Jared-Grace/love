import { list_filter_property_exists_map } from "../../../love/public/src/list_filter_property_exists_map.mjs";
export function list_filter_property_exists_map_fn(fn, list) {
  let property_name = fn();
  let mapped = list_filter_property_exists_map(list, property_name);
  return mapped;
}
