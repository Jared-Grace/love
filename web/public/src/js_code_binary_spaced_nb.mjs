import { js_code_binary_spaced_nb_generic } from "../../../love/public/src/js_code_binary_spaced_nb_generic.mjs";
import { list_between_space_nb } from "../../../love/public/src/list_between_space_nb.mjs";
export function js_code_binary_spaced_nb(left, operator_js, right) {
  let mapper = list_between_space_nb;
  let combined = js_code_binary_spaced_nb_generic(
    mapper,
    left,
    operator_js,
    right,
  );
  return combined;
}
