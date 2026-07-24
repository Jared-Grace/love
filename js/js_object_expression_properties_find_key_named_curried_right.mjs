import { js_object_expression_property_named_or_null } from "./js_object_expression_property_named_or_null.mjs";
export function js_object_expression_properties_find_key_named_curried_right(
  search,
) {
  let r =
    function js_object_expression_properties_find_key_named_curried_right_result(
      e,
    ) {
      let found = js_object_expression_property_named_or_null(e, search);
      return found;
    };
  return r;
}
