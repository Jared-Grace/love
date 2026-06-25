import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function list_find_property_curried_right_2(
  property_name,
  property_value,
) {
  let c = function list_find_property_curried_right_2_result(list) {
    let item = list_find_property(list, property_name, property_value);
    return item;
  };
  return c;
}
