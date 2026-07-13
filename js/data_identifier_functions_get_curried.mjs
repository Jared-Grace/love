import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { error_json_lamba } from "./error_json_lamba.mjs";
export function data_identifier_functions_get_curried(identifiers) {
  let r = function data_identifier_functions_get_curried_result(identifier) {
    if (not(property_exists(identifiers, identifier))) {
      function lambda() {
        let v = {
          identifier,
          hint: "i could not find an identifier by that name, dear one — would double-checking the spelling, or rebuilding the identifiers index, gently help?",
        };
        return v;
      }
      error_json_lamba(lambda);
    }
    let functions = property_get(identifiers, identifier);
    return functions;
  };
  return r;
}
