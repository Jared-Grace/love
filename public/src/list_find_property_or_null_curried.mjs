import { list_find_property_or_null } from "../../../love/public/src/list_find_property_or_null.mjs";
export function list_find_property_or_null_curried(list) {
  let c = function list_find_property_or_null_curried_result(
    property_name,
    property_value,
  ) {
    return list_find_property_or_null(list, property_name, property_value);
  };
  return c;
}
