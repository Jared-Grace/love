import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
export function js_object_expression_properties_find_key_named_curried_right(
  search,
) {
  let r =
    function js_object_expression_properties_find_key_named_curried_right_result(
      e,
    ) {
      let found = js_object_expression_properties_find_key_named(e, search);
      return found;
    };
  return r;
}
