import { error } from "../../../love/public/src/error.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
export function list_property_exists_not_error(all, property) {
  function lambda(item, index) {
    let n = property_exists_not(item, property);
    if (n) {
      error({
        index,
      });
    }
  }
  each_index(all, lambda);
}
