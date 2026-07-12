import { error } from "./error.mjs";
import { each_index } from "./each_index.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
export function list_property_exists_not_error(list, property) {
  function lambda(item, index) {
    let n = property_exists_not(item, property);
    if (n) {
      error({
        index,
      });
    }
  }
  each_index(list, lambda);
}
