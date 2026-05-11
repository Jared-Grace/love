import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_includes_not } from "../../../love/public/src/list_includes_not.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { property_get_or_null } from "../../../love/public/src/property_get_or_null.mjs";
export function list_filter_includes_not(list, property, list_other) {
  function lambda(item) {
    let value = property_get_or_null(item, property);
    if (null_is(value)) {
      return false;
    }
    let includes = list_includes_not(list_other, value);
    return includes;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
