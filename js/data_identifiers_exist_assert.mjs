import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { error_json_lamba } from "./error_json_lamba.mjs";
export function data_identifiers_exist_assert(identifiers, ids) {
  function lambda$id(identifier) {
    let missing = not(property_exists(identifiers, identifier));
    return missing;
  }
  let identifiers_not_found = list_filter(ids, lambda$id);
  if (list_empty_not_is(identifiers_not_found)) {
    function lambda() {
      let v = {
        identifiers_not_found,
        hint: "i could not find these identifiers by name, dear one — would double-checking the spelling, or rebuilding the identifiers index, gently help?",
      };
      return v;
    }
    error_json_lamba(lambda);
  }
}
