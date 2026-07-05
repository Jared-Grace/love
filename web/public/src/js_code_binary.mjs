import { js_code_binary_spaced_nb_generic } from "../../../love/public/src/js_code_binary_spaced_nb_generic.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
export function js_code_binary(left, operator, right) {
  let mapper = identity;
  let combined = js_code_binary_spaced_nb_generic(
    mapper,
    left,
    operator,
    right,
  );
  return combined;
}
